function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
function startGame() {
    console.log('spawning...')
    sleep(1000)  
    console.log('done!') 
}
function upgrade()(true) {
    else {
        console.log('You can not upgrade now!')
    };
    //variable defining ('true' is in the game and 'false' is not)                                                                                            
    var warper=true
    var skater=false
    var tanker=true
    //Warper class                                                                                                                                           \
                                                                                                                                                              
    if 'warper' == true ('spawnWarper') {
        noStroke();
        rotate(45);
        fill(0, 255, 26);
        rect(300,1,100,100);
        //                                                                                                                                                   \
                                                                                                                                                              
        fill(0, 0, 0);
        ellipse(350, 50, 100, 50);
        //                                                                                                                                                   \
                                                                                                                                                              
        noFill();
        stroke(5, 5, 5);
        strokeWeight(5);
        ellipse(350, 50, 100, 100);
	fill(255, 0, 255);
        //pink circles should orbit with finished code//                                                                                                     \                                                                                                                                                   
        noStroke();
        ellipse(230, 60, 50, 50);
        ellipse(466, 53, 50, 50);
    };
    //Tanker class                                                                                                                                           \                                                                                                                                                       
    if 'tanker' == true {
        rotate(45);
        fill(0, 255, 26);
        rect(300, 10, 100, 100);
        fill(0, 0, 0);
        ellipse(350, 58, 100, 50);
        //last 2 parameters are for tanker class only//                                                                                                      \
                                                                                                                                                              
        fill(40, 161, 67);
        rect(399, 45, 70, 10);
    };
};

