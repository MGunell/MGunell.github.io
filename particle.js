var particle = {
	position: null,
	velocity: null,
	originalp: null,
	originalv: null,
	angle: null,
	color: null,

	create: function( x, y, speed, direction, angle1) {
		var obj = Object.create(this);
		obj.position = vector.create(x ,y);
		obj.velocity = vector.create(0,0);
		obj.velocity.setLength(speed);
		obj.velocity.setAngle(direction);
		obj.originalp = vector.create(0, 0);
		obj.originalp.addTo(obj.position);
		obj.originalv = vector.create(0,0);
		obj.originalv.addTo(obj.velocity);
		obj.angle = angle1;
		obj.color = "#FF0000";
		return obj;
	},

	
	incrementColor: function(color, step) {
			var colorToInt = parseInt(color.substr(1), 16),                     // Convert HEX color to integer
			nstep = parseInt(step);                                         // Convert step to integer
			if(!isNaN(colorToInt) && !isNaN(nstep)) {                            // Make sure that color has been converted to integer
				colorToInt += nstep;                                            // Increment integer with step
				var ncolor = colorToInt.toString(16);                           // Convert back integer to HEX
				ncolor = '#' + (new Array(7-ncolor.length).join(0)) + ncolor;   // Left pad "0" to make HEX look like a color
				if(/^#[0-9a-f]{6}$/i.test(ncolor)){                             // Make sure that HEX is a valid color
					return ncolor;
				}
			}
			return color;
	},
	
	update: function() {
		this.position.addTo(this.velocity);
	},

	accelerate: function(accel) {
		this.velocity.addTo(accel);
	},
	
	angleUpdate: function() {
		this.angle += 4;
		this.position.setY(600 + Math.cos(this.angle * Math.PI/180)*50);
		//this.position.addX(4);
	},

	reset: function(x, y, speed, direction) {
		this.position.setY(0);
		this.position.setX(0);
		this.velocity.setY(0);
		this.velocity.setX(0);
		
		this.originalv.setY(this.originalv.getY()+3);
		if (this.originalv.getY() < 0) {
			this.velocity.addTo(this.originalv);
		}
		

		
		this.position.addTo(this.originalp);
	}
};