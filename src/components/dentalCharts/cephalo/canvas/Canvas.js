import './style.scss'
import { useEffect, useRef, useContext } from 'react'
import { cephaloPoints, chartState } from '../_state'
import calculateTheDistanceAndAngle from '../_calculateTheDistanceAndAngle'

import { ContextConsumer } from '../../../../context'

const CephaloCanvas = () => {
    const { setCephaloResult } = useContext(ContextConsumer)

    // reference to the canvas element
    const canvas = useRef(null)

    // render the canvas on screen
    const renderCanvas = () => {
        const ctx = canvas.current
        // set the width and height of the canvas
        ctx.width = window.innerWidth * 0.98
        ctx.height = window.innerHeight * 1.22
        // reference to 2d context
        let c = ctx.getContext('2d')

        // Circle class to draw on the canvas
        class Circle {
            // circle props
            constructor(x, y, cirRef) {
                this.x = x
                this.y = y
                this.r = 4
                this.cirRef = cirRef
            }
            // circle drawing method
            draw() {
                c.beginPath()
                c.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
                c.fillStyle = 'red'
                c.fill()
                c.fillStyle = 'white'
                c.font = 'bold 16px serif'
                c.textBaseline = 'top'
                c.fillText(this.cirRef, this.x, this.y)
            }
        }

        // add event-listeners
        document.addEventListener('mousemove', dragPoints)
        document.addEventListener('mousedown', setDraggable)
        document.addEventListener('mouseup', setDraggable)
        document.addEventListener('mouseup', addPoints)

        let circles = []

        // append a new circles && lines to the canvas
        function addPoints(e) {
            // check if the user selected a point from clac-head
            if (chartState.isPointSelected) {
                const { layerX, layerY } = e

                cephaloPoints.forEach((point) => {
                    let key = Object.keys(point)[0]
                    if (key === chartState.entryPoint) {
                        circles.push(new Circle(layerX, layerY, chartState.entryPoint))
                        point[chartState.entryPoint] = [layerX, layerY]
                    }
                })
                drawCircles()
                chartState.isPointSelected = false
                chartState.entryPoint = false
            }
        }

        // main draw method
        function draw() {
            //clear canvas
            c.clearRect(0, 0, ctx.width, ctx.height)
            drawCircles()
        }

        // draw circles
        function drawCircles() {
            for (let i = circles.length - 1; i >= 0; i--) {
                circles[i].draw()
            }
        }

        // key track of circle focus and focused index
        let focused = {
            key: 0,
            state: false
        }

        function dragPoints(e) {
            if (chartState.isMouseDown) return
            getMousePosition(e)
            // if any circle is focused
            if (focused.state) {
                // get the x and y current postion of the mouse
                let xPos = (circles[focused.key].y = chartState.mousePosition.x)
                let yPos = (circles[focused.key].y = chartState.mousePosition.y)
                // update the x and y coordinates of the circle
                circles[focused.key].x = xPos
                circles[focused.key].y = yPos
                // get the reference-chartState.entryPoint from the circle
                const ruleRef = circles[focused.key].cirRef
                // update the cephaloPoints (x,y) coorinates based on the reference-key
                cephaloPoints.forEach((point) => {
                    let key = Object.keys(point)[0]
                    if (key === ruleRef) {
                        point[ruleRef] = [chartState.mousePosition.x, chartState.mousePosition.y]
                    }
                })

                draw()
                const { angles, distances } = calculateTheDistanceAndAngle()
                setCephaloResult(() => {
                    return {
                        angles,
                        distances
                    }
                })
            }
            // no circle currently focused check if circle is hovered
            for (let i = 0; i < circles.length; i++) {
                if (intersects(circles[i])) {
                    circles.moveIndex(i, 0)
                    focused.state = true
                    break
                }
            }
            draw()
        }

        // set mousedown state
        function setDraggable(e) {
            let t = e.type
            if (t === 'mousedown') {
                chartState.isMouseDown = true
            } else if (t === 'mouseup') {
                chartState.isMouseDown = false
                releaseFocus()
            }
        }

        function releaseFocus() {
            focused.state = false
        }

        function getMousePosition(e) {
            let rect = ctx.getBoundingClientRect()
            chartState.mousePosition = {
                x: Math.round(e.x - rect.left),
                y: Math.round(e.y - rect.top)
            }
        }

        // detects whether the mouse cursor is between x and y relative to the radius specified
        function intersects(circle) {
            // subtract the x, y coordinates from the mouse position to get coordinates
            // for the hotspot location and check against the area of the radius
            let areaX = chartState.mousePosition.x - circle.x
            let areaY = chartState.mousePosition.y - circle.y
            // return true if x^2 + y^2 <= radius squared.
            return areaX ** 2 + areaY ** 2 <= circle.r ** 2
        }

        // change the dragging-focus between circles
        Array.prototype.moveIndex = function (old_index, new_index) {
            if (new_index >= this.length) {
                let k = new_index - this.length
                while (k-- + 1) {
                    this.push(undefined)
                }
            }
            this.splice(new_index, 0, this.splice(old_index, 1)[0])
        }
        draw()
    }

    useEffect(() => renderCanvas(), [])

    return (
        <div className="cephalo-canvas">
            <canvas ref={canvas}></canvas>
        </div>
    )
}

export default CephaloCanvas
