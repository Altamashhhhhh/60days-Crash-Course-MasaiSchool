let rectangle= {
    width : 20, 
    length : 20 ,
  
    area : function(){
        return this.length * this.width ; 
  
    }
    ,
    perimeters : function(){
        return 2 * ( this.length * this.width)
    }
  }
  
  
  console.log(rectangle.perimeters())