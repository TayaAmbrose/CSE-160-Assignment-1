// Taya Ambrose
// Email: tjambros@ucsc.edu
// CSE 160, Assignment 1

// Original picture at night

class Picture {
    constructor(){
        this.type = 'picture';
        this.d = 255;

        // Colors
        this.mountainColor = [30 / this.d, 0, 30 / this.d , 1.0]; // Deep Purple
        this.mountainColor2 = [60 / this.d, 0, 60 / this.d , 1.0]; // Lighter Purple
        this.grassColor = [0, 0 / this.d, 0, 1.0]; // In-between Green
        
        this.moonColor = [255 / this.d , 255 / this.d, 150 / this.d, 1]; // Lighter Yellow
        this.moonColor2 = [255 / this.d , 250 / this.d, 150 / this.d, 1]; // Light Yellow

        this.pathColor = [60 / this.d, 0, 60 / this.d , 1.0]; // light brown

        this.skyColor = [0, 0, 100 / this.d , 1.0]; // Darker Blue
        this.windowColor = [255 / this.d , 250 / this.d, 150 / this.d, 1]; // Light Yellow
        this.windowColor2 = [255 / this.d, 215 / this.d, 0 / this.d, 1]; // Deep Yellow
        this.roofColor = [100 / this.d ,50 / this.d ,10 / this.d, 1]; // Roof Brown
        this.houseColor = [139 / this.d ,69 / this.d ,19 / this.d, 1]; // House Brown

        // Positions
        this.roofPosition = [-0.8, -0.3, -0.1, -0.3, -0.45, -0.1]; // Set the position of the roof
        this.housePositionTL = [-0.7, -0.3, -0.7, -0.6, -0.2, -0.3];
        this.housePositionBR = [-0.7, -0.6, -0.2, -0.3, -0.2, -0.6];
        this.windowPositionTL = [-0.65, -0.35, -0.65, -0.45, -0.55, -0.35];
        this.windowPositionBR = [-0.65, -0.45, -0.55, -0.35, -0.55, -0.45];
        this.doorPositionTL = [-0.45, -0.6, -0.45, -0.4, -0.35, -0.4];
        this.doorPositionBR = [-0.45, -0.6, -0.35, -0.4, -0.35, -0.6];
        this.doorKnobPositionTL = [-0.39, -0.5, -0.39, -0.52, -0.37, -0.5];
        this.doorKnobPositionBR = [-0.39, -0.52, -0.37, -0.52, -0.37, -0.5,];

        // Ground
        this.grassPositionTL = [-1.0, -0.5, -1.0, -1.0, 1.0, -1.0];
        this.grassPositionBR = [1.0, -0.5, 1.0, -1.0, -1.0, -0.5];

        // Path
        this.pathMiddle = [-0.45, -0.6, -0.35, -0.6, 0.1, -1.0];
        this.pathLeft = [-0.45, -0.6, -0.3, -1.0, 0.1, -1.0];
        this.pathRight = [-0.35, -0.6, 0.1, -1.0, 0.4, -1.0];
        
        // Sky
        this.skyPositionTL = [-1.0, 1.0, 1.0, 1.0, -1.0, -0.5];
        this.skyPositionBR = [1.0, 1.0, -1.0, -0.5, 1.0, -0.5];

        // Mountains
        this.backMountain = [-1.5, -0.5, 0.6, -0.5, -0.2, 0.6];
        this.frontMountain = [0.0, -0.5, 1.0, -0.5, 1.0, 0.8];

        // Moon
        this.moonTL = [-0.8, 0.8, -0.8, 0.6, -0.6, 0.8];
        this.moonBR = [-0.8, 0.6, -0.6, 0.6, -0.6, 0.8];

        // Stars
        this.starTL = [0.5, 0.6, 0.5, 0.58, 0.48, 0.6]; // top left triangle
        this.starBR = [0.48, 0.58, 0.48, 0.6, 0.5, 0.58]; // bottom right triangle

        this.star2TL = [0.4, 0.4, 0.4, 0.38, 0.38, 0.4];
        this.star2BR = [0.38, 0.38, 0.38, 0.4, 0.4, 0.38];

        this.star3TL = [-0.6, 0.4, -0.6, 0.38, -0.62, 0.4];
        this.star3BR = [-0.62, 0.38, -0.62, 0.4, -0.6, 0.38];

        this.star4TL = [-0.8, 0.2, -0.8, 0.18, -0.82, 0.2];
        this.star4BR = [-0.82, 0.18, -0.82, 0.2, -0.8, 0.18];

        this.star5TL = [-0.2, 0.8, -0.2, 0.78, -0.22, 0.8];
        this.star5BR = [-0.22, 0.78, -0.22, 0.8, -0.2, 0.78];

        this.star6TL = [-0.95, 0.6, -0.95, 0.58, -0.97, 0.6];
        this.star6BR = [-0.97, 0.58, -0.97, 0.6, -0.95, 0.58];

        this.star7TL = [0.9, 1.0, 0.9, 0.98, 0.88, 1.0];
        this.star7BR = [0.88, 0.98, 0.88, 1.0, 0.9, 0.98];
        
        this.size = 10; // Set the size of the picture
    }

    // Draw the house
    drawHouse() {
        gl.uniform4f(u_FragColor, ...this.roofColor); // color
        drawTriangle(this.roofPosition); // roof
        gl.uniform4f(u_FragColor, ...this.houseColor); // color
        drawTriangle(this.housePositionTL); // top left part of the house
        drawTriangle(this.housePositionBR); // bottom right part of the house
        gl.uniform4f(u_FragColor, ...this.roofColor); // color
        drawTriangle(this.doorPositionTL); // top left of the door
        drawTriangle(this.doorPositionBR); // bottom right of the door
        gl.uniform4f(u_FragColor, ...this.windowColor); // color
        drawTriangle(this.windowPositionTL); // top left part of the window
        drawTriangle(this.doorKnobPositionTL); // top part of door knob
        gl.uniform4f(u_FragColor, ...this.windowColor2); // color
        drawTriangle(this.windowPositionBR); // top left part of the window
        drawTriangle(this.doorKnobPositionBR); // bottom part of door knob
    }

    // Draw the sky
    drawSky() {
            gl.uniform4f(u_FragColor, ...this.skyColor); // color
            drawTriangle(this.skyPositionTL); // sky left
            drawTriangle(this.skyPositionBR); // sky right
            gl.uniform4f(u_FragColor, ...this.moonColor); // color
            drawTriangle(this.moonTL); // moon left
            gl.uniform4f(u_FragColor, ...this.moonColor2); // color
            drawTriangle(this.moonBR); // moon right
        
            gl.uniform4f(u_FragColor, ...this.moonColor); // color
            drawTriangle(this.starTL); // star left
            drawTriangle(this.starBR); // star right
        
            drawTriangle(this.star2TL); // star left
            drawTriangle(this.star2BR); // star right
        
            drawTriangle(this.star3TL); // star left
            drawTriangle(this.star3BR); // star right
        
            drawTriangle(this.star4TL); // star left
            drawTriangle(this.star4BR); // star right
        
            drawTriangle(this.star5TL); // star left
            drawTriangle(this.star5BR); // star right
        
            drawTriangle(this.star6TL); // star left
            drawTriangle(this.star6BR); // star right
                
            drawTriangle(this.star7TL); // star left
            drawTriangle(this.star7BR); // star right
    }

    // Draw ground
    drawGrass() {
        gl.uniform4f(u_FragColor, ...this.grassColor); // color
        drawTriangle(this.grassPositionTL); // grass left
        drawTriangle(this.grassPositionBR); // grass right
    }

    // Draw path
    drawPath() {
        gl.uniform4f(u_FragColor, ...this.pathColor); // color
        drawTriangle(this.pathMiddle); // middle of the path
        drawTriangle(this.pathLeft); // left of the path
        drawTriangle(this.pathRight); // right of the path
    }

    // Draw mountains
    drawMountains() {
        gl.uniform4f(u_FragColor, ...this.mountainColor); // color
        drawTriangle(this.backMountain);
        gl.uniform4f(u_FragColor, ...this.mountainColor2); // color
        drawTriangle(this.frontMountain);
    }

    // run each function
    render () {
        this.drawSky();
        this.drawMountains();
        this.drawGrass()
        this.drawPath();
        this.drawHouse();
    }
}

// Function to draw the full picture
function drawPicture() {
    let picture = new Picture();
    g_shapesList.push(picture);
    renderAllShapes();
}
