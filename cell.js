function upgrade()
var warper=true
var skater=false
var tanker=true
//Warper class                                                                                                                                                
if 'warper' == true {
    noStroke();
    rotate(45);
    fill(0, 255, 26);
    rect(300,1,100,100);
    //                                                                                                                                                        
    fill(0, 0, 0);
    ellipse(350, 50, 100, 50);
    //                                                                                                                                                        
    noFill();
    stroke(5, 5, 5);
    strokeWeight(5);
    ellipse(350, 50, 100, 100);
    fill(255, 0, 255);
    //pink circles should orbit with finished code//                                                                                                          
    noStroke();
    ellipse(230, 60, 50, 50);
    ellipse(466, 53, 50, 50);
}
//Tanker class                                                                                                                                                
if 'tanker' == true {
    rotate(45);
    fill(0, 255, 26);
    rect(300, 10, 100, 100);

    fill(0, 0, 0);
    ellipse(350, 58, 100, 50);
    //last 2 parameters are for tanker class only//                                                                                                           
    fill(40, 161, 67);
    rect(399, 45, 70, 10);
}
