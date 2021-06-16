class Contra{
	constructor(l,c){
		this.longitud= l;
		this.contrasena=c;
	}

	getLongitud(){
		return this.longitud=8;
		
	}

	getContrasena(){
		return this.contrasena= document.getElementById("contraseña").value;
	}

 
		 Fuerte()
		{
			if(this.getContrasena().length >= this.getLongitud())
			{		
				var mayuscula = 0;
				var minuscula = 0;
				var numero = 0;
				
				for(var i = 0;i<this.getContrasena().length;i++)
				{
					if(this.getContrasena().charCodeAt(i) >= 65 && this.getContrasena().charCodeAt(i) <= 90)
					{
						mayuscula +=1 ;
					}
					else if(this.getContrasena().charCodeAt(i) >= 97 && this.getContrasena().charCodeAt(i) <= 122)
					{
						minuscula +=1;
					}
					else if(this.getContrasena().charCodeAt(i) >= 48 && this.getContrasena().charCodeAt(i) <= 57)
					{
						numero +=1;
					}
					
				}
				if(mayuscula>2 && minuscula>1 && numero>5)
				{
					return alert("Contraseña fuerte");
				}else{
                    return alert("Contraseña débil")
                }
			}else{
                alert("Debe contener al menos 8 caracteres")
            }
			return false;
		}
        
}
const mensaje= new Contra();
		