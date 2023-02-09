class Shape {
    constructor(backgroundColor, textColor, textChoice) {
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.textChoice = textChoice;
    }
}


class Circle extends Shape {
    constructor(backgroundColor, textColor, textChoice) {
        super(backgroundColor, textColor, textChoice);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.backgroundColor}" />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textChoice}</text>
        </svg>`;
    }
}


class Triangle extends Shape {
    constructor(backgroundColor, textColor, textChoice) {
        super(backgroundColor, textColor, textChoice);
    }
    
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="160,10 290,200 10,200" style="fill:${this.backgroundColor};stroke:purple;stroke-width:1" />
        <text x="155" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textChoice}</text>
        </svg>`;
    }
}


class Square extends Shape {
    constructor(backgroundColor, textColor, textChoice) {
        super(backgroundColor, textColor, textChoice);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.backgroundColor}" />
        <text x="100" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textChoice}</text>
        </svg>`;
    }
}


module.exports = { Circle, Triangle, Square };