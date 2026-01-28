class Player{ 
  constructor(name) {
    this.name = name;
    this.life= 40;
    this.turnCount = 0;
  }
  takeDamage(amount){
    this.life -= amount;
  }
}
  
