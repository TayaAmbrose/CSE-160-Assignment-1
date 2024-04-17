// Taya Ambrose
// Email: tjambros@ucsc.edu
// CSE 160, Assignment 1

// Picture during the day

class PictureDay {
    constructor(){
        this.type = 'picture';
        this.d = 255;

        // Colors
        this.mountainColor = [0, 200 / this.d, 0, 1.0]; // Bright Grass Green
        this.grassColor = [0, 150 / this.d, 0, 1.0]; // In-between Green
        this.mountainColor2 = [0, 100 / this.d, 0, 1.0]; // Dark Green
        this.sunColor = [255 / this.d, 215 / this.d, 0 / this.d, 1]; // Lighter Yellow
        this.sunColor2 = [255 / this.d , 250 / this.d, 150 / this.d, 1]; // Light Yellow

        this.pathColor = [150 / this.d, 100 / this.d, 50 / this.d, 1.0]; // light brown

        this.skyColor = [135 / this.d, 206 / this.d, 250 / this.d, 1.0]; // Darker Blue
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

        // Grass
        this.grassPositionTL = [-1.0, -0.5, -1.0, -1.0, 1.0, -1.0];
        this.grassPositionBR = [1.0, -0.5, 1.0, -1.0, -1.0, -0.5];

        // Path
        this.pathMiddle = [-0.45, -0.6, -0.35, -0.6, 0.1, -1.0];
        this.pathLeft = [-0.45, -0.6, -0.3, -1.0, 0.1, -1.0];
        this.pathRight = [-0.35, -0.6, 0.1, -1.0, 0.4, -1.0];
        
        //Sky
        this.skyPositionTL = [-1.0, 1.0, 1.0, 1.0, -1.0, -0.5];
        this.skyPositionBR = [1.0, 1.0, -1.0, -0.5, 1.0, -0.5];

        // Mountains
        this.backMountain = [-1.5, -0.5, 0.6, -0.5, -0.2, 0.6];
        this.frontMountain = [0.0, -0.5, 1.0, -0.5, 1.0, 0.8];

        // Sun
        this.sunTL = [-0.8, 0.8, -0.8, 0.6, -0.6, 0.8];
        this.sunBR = [-0.8, 0.6, -0.6, 0.6, -0.6, 0.8];
        
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

    // Draw sky
    drawSky() {
        gl.uniform4f(u_FragColor, ...this.skyColor); // color
        drawTriangle(this.skyPositionTL); // sky left
        drawTriangle(this.skyPositionBR); // sky right
        gl.uniform4f(u_FragColor, ...this.sunColor); // color
        drawTriangle(this.sunTL); // sun left
        gl.uniform4f(u_FragColor, ...this.sunColor2); // color
        drawTriangle(this.sunBR); // sun right
    }

    // Draw grass
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
function drawPictureDay() {
    let picture = new PictureDay();
    g_shapesList.push(picture);
    renderAllShapes();
}