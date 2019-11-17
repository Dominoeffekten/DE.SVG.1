/*globals document, window */
'use strict';

let xmlns = 'http://www.w3.org/2000/svg';

//SVG
let SVG = {
    init(svgId, viewbox, id) {
        this.svg = $(svgId);
        this.viewbox = viewbox;
        this.id = id;
        this.create();
        
    },
    create(){
        let svg1 = document.createElementNS(xmlns, 'svg');
        svg1.setAttributeNS(null, 'id', this.id);
        svg1.setAttributeNS(null, 'viewbox', this.viewbox);
        svg1.setAttributeNS(null, 'height', '100%');
        svg1.setAttributeNS(null, 'width', '100%');
        //svg1.setAttributeNS(null, 'style', 'background-color:#000;');
        this.svg.appendChild(svg1);  
    },
    rect( x, y, w, h, fill){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill = fill;
        this.drawRect();
    },
    drawRect(){
        var svg = document.getElementById(this.id);
        let r = document.createElementNS(xmlns, 'rect');
        r.setAttributeNS(null, 'x', this.x);
        r.setAttributeNS(null, 'y', this.y);
        r.setAttributeNS(null, 'width', this.w);
        r.setAttributeNS(null, 'height', this.h);
        r.setAttributeNS(null, 'fill', this.fill);
        svg.appendChild(r);
    },
    circle(cx, cy, r, fill){
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.fill = fill;
        this.drawCircel();
    },
    drawCircel(){
        var svg = document.getElementById(this.id);
        let r = document.createElementNS(xmlns, 'circle');
        r.setAttributeNS(null, 'cx', this.cx);
        r.setAttributeNS(null, 'cy', this.cy);
        r.setAttributeNS(null, 'r', this.r);
        r.setAttributeNS(null, 'fill', this.fill);
        svg.appendChild(r);
    },
    ellipse(cx, cy, rx, ry, fill){ //ecllips
        this.cx = cx;
        this.cy = cy;
        this.rx = rx;
        this.ry = ry;
        this.fill = fill;
        this.drawEllipse();
    },
    drawEllipse(){
        var svg = document.getElementById(this.id);
        let r = document.createElementNS(xmlns, 'ellipse');
        r.setAttributeNS(null, 'cx', this.cx);
        r.setAttributeNS(null, 'cy', this.cy);
        r.setAttributeNS(null, 'rx', this.rx);
        r.setAttributeNS(null, 'ry', this.ry);
        r.setAttributeNS(null, 'fill', this.fill);
        svg.appendChild(r);
    },
    polygon(points,fill){ //stjerne
        this.points = points;
        this.fill = fill;
        this.drawPolygon();
    },
    drawPolygon(){
        var svg = document.getElementById(this.id);
        let r = document.createElementNS(xmlns, 'polygon');
        r.setAttributeNS(null, 'points', this.points);
        r.setAttributeNS(null, 'fill', this.fill);
        svg.appendChild(r);
    },
    path(d,fill){ //stjerne
        this.d = d;
        this.fill = fill;
        this.drawPath();
    },
    drawPath(){
        var svg = document.getElementById(this.id);
        let r = document.createElementNS(xmlns, 'path');
        r.setAttributeNS(null, 'd', this.d);
        r.setAttributeNS(null, 'fill', this.fill);
        svg.appendChild(r);
    },
    
};



/*
//Shape
let Shape = {
    rect(x, y, w, h, stroke, fill){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
    },
    roundRect(x, y, rx, ry, w, h, stroke, fill){
        this.x = x;
        this.y = y;
        this.rx = rx;
        this.ry = ry;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
    },
    cirkel(cx, cy, r, fill){
        this.cx = cx;
        this.cy = cy;
        this.r = r;
        this.fill = fill;
    },
    ellipse(cx, cy, rx, ry, fill){
        this.cx = cx;
        this.cy = cy;
        this.rx = rx;
        this.ry = ry;
        this.fill = fill;
    },
    line(x1, x2, y1, y2, stroke){
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
        this.stroke = stroke;
    },
    polygon(stroke, fill){
        this.points = '50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180';
        this.stroke = stroke;
        this.fill = fill;
    },
    draw() {
        this.strokeW = 2;
        
        let xmlns = 'http://www.w3.org/2000/svg';
        var svg2 = document.getElementById('svgbox');
        let r = document.createElementNS(xmlns, 'rect');
        r.setAttributeNS(null, 'x', this.x);
        r.setAttributeNS(null, 'y', this.y);
        r.setAttributeNS(null, 'width', this.w);
        r.setAttributeNS(null, 'height', this.h);
        r.setAttributeNS(null, 'stroke', this.stroke);
        r.setAttributeNS(null, 'fill', this.fill);
        r.setAttributeNS(null, 'stroke-width', this.strokeW);
        this.svg.appendChild(r);
        
        
        
    }
};


*/


