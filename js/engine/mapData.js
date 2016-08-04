// onSolidHit; Walking into solid block
// onWalkOver: Enter ontop of block/item
// onRender: When block is rendered
// onAction: when player search a block infront of the facing direction
// onActionOver: Do action on the block player is stading on

// this.isSearched: if the player has used onAction on block

// Textures: 
// Animation use: anim : [ {x: 0, y: 0}, {etc..} ], non animation use: x : 0, y : 0

var MapObjects = {
        
        '484848' : {
            name        : 'wall edge',
            solid       : true,
            moveable    : false,
            type        : 'block',
            x           : 2,
            y           : 0,
            onAction    : function(){

            }
        },
        '3c3c3c' : {
            name        : 'wall below edge',
            solid       : true,
            moveable    : false,
            type        : 'block',
            x           : 6,
            y           : 0,
            onAction    : function(){

            }
        },
        '776022' : {
            name        : 'door',
            solid       : false,
            moveable    : false,
            type        : 'block',
            x           : 3,
            y           : 0,
        },
        'ffffff' : {
            name        : 'dirt',
            solid       : false,
            moveable    : false,
            type        : 'block',
            x           : 0,
            y           : 0,
        },
        '00ff00' : {
            name        : 'chest',
            solid       : false,
            moveable    : true,
            type        : 'item',
            x           : 0,
            y           : 9,
            onWalkOver  : function(){
                Engine.loadNextMap('next');
            }
        },
        'ff0000' : {
            name        : 'player',
            solid       : false,
            moveable    : false,
            type        : 'player',
            facing      : [ 
                [{x:0,y:8},{x:1,y:8},{x:2,y:8}], // 0 Left
                [{x:0,y:6},{x:1,y:6},{x:2,y:6}], // 1 Up
                [{x:0,y:7},{x:1,y:7},{x:2,y:7}], // 2 Right
                [{x:0,y:5},{x:1,y:5},{x:2,y:5}], // 3 Down
            ]
        },
        '00a000' : {
            name        : 'hedge',
            solid       : true,
            moveable    : false,
            type        : 'block',
            x           : 1,
            y           : 1,
        },
        '009100' : {
            name        : 'hedge_edge',
            solid       : true,
            moveable    : false,
            type        : 'block',
            x           : 2,
            y           : 1,
        },
        'd500ff' : {
            name        : 'rose_hedge_edge',
            solid       : true,
            moveable    : false,
            type        : 'block',
            x           : 4,
            y           : 1,
        },
        '004f00' : {
            name        : 'hedge_edge_door',
            solid       : false,
            moveable    : false,
            type        : 'block',
            x           : 3,
            y           : 1,
        },
        '88293b' : {
            name        : 'ruby',
            solid       : false,
            moveable    : false,
            type        : 'item',
            x           : 6,
            y           : 10,
            onWalkOver  : function(){
                Engine.money += 25;
                this.block_id = MapObjects['ffffff'];
            }
        },
        'f9e000' : {
            name        : 'gold coin',
            solid       : false,
            moveable    : false,
            type        : 'item',
            anim        : [
                {x: 3, y: 10},
                {x: 3, y: 11},
                {x: 3, y: 12},
                {x: 3, y: 13},
                {x: 3, y: 12},
                {x: 3, y: 11},
            ],
            onWalkOver  : function(){
                Engine.money += 10;
                this.block_id = MapObjects['ffffff'];
            }
        },
        'e5e5e5' : {
            name        : 'silver coin',
            solid       : false,
            moveable    : false,
            type        : 'item',
            anim        : [
                {x: 4, y: 10},
                {x: 4, y: 11},
                {x: 4, y: 12},
                {x: 4, y: 13},
                {x: 4, y: 12},
                {x: 4, y: 11},
            ],
            onWalkOver  : function(){
                Engine.money += 5;
                this.block_id = MapObjects['ffffff'];
            }
        },
        'cd6e28' : {
            name        : 'bronze coin',
            solid       : false,
            moveable    : false,
            type        : 'item',
            onWalkOver  : function(){
                Engine.money++;
                this.block_id = MapObjects['ffffff'];
            },
            anim        : [
                {x: 5, y: 10},
                {x: 5, y: 11},
                {x: 5, y: 12},
                {x: 5, y: 13},
                {x: 5, y: 12},
                {x: 5, y: 11},
            ]
        },
        'cd3f28' : {
            name        : 'fire',
            solid       : true,
            moveable    : false,
            type        : 'item',
            anim        : [
                {x: 0, y: 15},
                {x: 1, y: 15},
                {x: 2, y: 15},
            ],
            onWalkOver  : function(){
                console.log('au')
            }
        },
        'd13131' : {
            name        : 'hp',
            solid       : false,
            moveable    : false,
            type        : 'item',
            x           : 0,
            y           : 11,
            onWalkOver  : function(){
                console.log('au')
            }
        },
        'bada55' : {
            name        : 'water fall',
            solid       : true,
            moveable    : false,
            type        : 'item',
            anim        : [
                {x: 14, y: 0},
                {x: 14, y: 1},
            ]
        },
        '98b244' : {
            name        : 'water fall end',
            solid       : true,
            moveable    : false,
            type        : 'item',
            anim        : [
                {x: 15, y: 0},
                {x: 15, y: 1},
            ],
            onRender : function(){
                if(Engine.fullMap[this.x][this.y+1].block_id == MapObjects['ffffff']){
                    Engine.fullMap[this.x][this.y+1].block_id = MapObjects['667731'];
                }
            }
        },
        '667731' : {
            uuid        : '667731',
            name        : 'water',
            solid       : true,
            moveable    : false,
            type        : 'block',
            anim        : [
                {x: 1, y: 2},
                {x: 2, y: 2},
                {x: 3, y: 2},
                {x: 4, y: 2},
                {x: 5, y: 2},
            ],
        },
        'ff6600' : {
            uuid        : 'ff6600',
            name        : 'lava',
            solid       : true,
            moveable    : false,
            type        : 'block',
            anim        : [
                {x: 1, y: 3},
                {x: 2, y: 3},
                {x: 3, y: 3},
                {x: 4, y: 3},
                {x: 5, y: 3},
            ],
        },
        '2f91a6' : {
            uuid          : '2f91a6',
            name        : 'Bucket',
            solid       : false,
            moveable    : false,
            type        : 'item',
            x           : 3,
            y           : 6,
            onActionOver : function(){
                if(Engine.addToInvetory(this.block_id)) this.block_id = MapObjects['ffffff'];
            },
            onUse : function(){

                if(this.block_id == MapObjects['667731']){
                    Engine.changeInvetoryItem(MapObjects['256d7c']);
                    this.block_id = MapObjects['ffffff'];
                }
                if(this.block_id == MapObjects['ff6600']){
                    Engine.changeInvetoryItem(MapObjects['1e5661']);
                    this.block_id = MapObjects['ffffff'];
                } 
            },
        },
        '256d7c' : {
            uuid          : '256d7c',
            name        : 'Bucket Filled Water',
            solid       : false,
            moveable    : false,
            type        : 'item',
            x           : 3,
            y           : 7,
            onActionOver : function(){
                if(Engine.addToInvetory(this.block_id)) this.block_id = MapObjects['ffffff'];
            },
            onUse : function(){

                if(this.block_id == MapObjects['ffffff']){
                    Engine.changeInvetoryItem(MapObjects['2f91a6']);
                    this.block_id = MapObjects['667731'];
                } 
                if(this.block_id == MapObjects['cd3f28']){
                    Engine.changeInvetoryItem(MapObjects['2f91a6']);
                    this.block_id = MapObjects['ffffff'];
                }
                if(this.block_id == MapObjects['ff6600']){
                    Engine.changeInvetoryItem(MapObjects['2f91a6']);
                    this.block_id = MapObjects['ffffff'];
                }
                
            },
        },
        '1e5661' : {
            uuid          : '1e5661',
            name        : 'Bucket Filled Lava',
            solid       : false,
            moveable    : false,
            type        : 'item',
            x           : 3,
            y           : 8,
            onActionOver : function(){
                if(Engine.addToInvetory(this.block_id)) this.block_id = MapObjects['ffffff'];
            },
            onUse : function(){

                if(this.block_id == MapObjects['ffffff']){
                    Engine.changeInvetoryItem(MapObjects['2f91a6']);
                    this.block_id = MapObjects['ff6600'];
                }
                if(this.block_id == MapObjects['667731']){
                    Engine.changeInvetoryItem(MapObjects['2f91a6']);
                    this.block_id = MapObjects['ffffff'];
                } 
            },
        },
        'eddfae' : {
            uuid        : 'eddfae',
            name        : 'Key',
            solid       : false,
            moveable    : false,
            type        : 'item',
            x           : 6,
            y           : 9,
            onActionOver : function(){
                if(Engine.addToInvetory(this.block_id)) this.block_id = MapObjects['ffffff'];
            },
            onUse : function(){
                if(this.block_id == MapObjects['513906']){
                    Engine.removeSelectedInvetoryitem();
                    this.block_id = MapObjects['745208'];
                }
            },
        },
        'a048dd' : {
            uuid        : 'a048dd',
            name        : 'Dagger',
            solid       : false,
            moveable    : false,
            type        : 'item',
            x           : 3,
            y           : 9,
            onActionOver : function(){
                if(Engine.addToInvetory(this.block_id)) this.block_id = MapObjects['ffffff'];
            },
            onUse : function(){
                if(this.block_id == MapObjects['232e1d']){
                    this.hp--;
                    
                    if(this.hp <= 0){
                        this.block_id = MapObjects['eddfae'];
                    }
                }
            },
        },
        '745208' : {
            uuid        : '745208',
            name        : 'Door Open',
            solid       : false,
            moveable    : false,
            type        : 'item',
            x           : 1,
            y           : 4,
        },
        '513906' : {
            uuid        : '513906',
            name        : 'Door Closed',
            solid       : true,
            moveable    : false,
            type        : 'item',
            x           : 0,
            y           : 4,
        },
        '232e1d' : {
            uuid        : '232e1d',
            name        : 'Snake',
            solid       : true,
            moveable    : false,
            type        : 'creature',
            anim        : [
                {x: 7, y: 8},
                {x: 7, y: 8},
                {x: 7, y: 8},
                {x: 6, y: 8},
                {x: 5, y: 8},
                {x: 6, y: 8},
                {x: 7, y: 8},
                {x: 7, y: 8},
                {x: 7, y: 8},
            ],
            onRenderFull : function(){
                if(typeof this.hp === 'undefined') this.hp = 5;
                
                //console.log(i)
                Engine.drawFromSprite(MapObjects['healthBar'].anim[5-this.hp], this.x, this.y);
                

            }
        },
        '808080' : {
            uuid        : '808080',
            name        : 'Boulder',
            solid       : true,
            moveable    : false,
            type        : 'item',
            x           : 1,
            y           : 10,
            onSolidHit  : function(){
                // 2 = x+1 d
                // 0 = x-1 a
                // 1 = y+1 s
                // 3 = y-1 w
                
                // Make function for this shit
                if(Engine.facing == 2){
                    if(Engine.fullMap[this.x+1][this.y].block_id == MapObjects['ffffff']){
                        Engine.fullMap[this.x+1][this.y].block_id = this.block_id;
                        this.block_id = MapObjects['ffffff'];
                    }
                    if(Engine.fullMap[this.x+1][this.y].block_id == MapObjects['667731']){
                        Engine.fullMap[this.x+1][this.y].block_id = MapObjects['ffffff'];
                        this.block_id = MapObjects['ffffff'];
                    }
                }
                if(Engine.facing == 0){
                    if(Engine.fullMap[this.x-1][this.y].block_id == MapObjects['ffffff']){
                        Engine.fullMap[this.x-1][this.y].block_id = this.block_id;
                        this.block_id = MapObjects['ffffff'];
                    }
                    if(Engine.fullMap[this.x-1][this.y].block_id == MapObjects['667731']){
                        Engine.fullMap[this.x-1][this.y].block_id = MapObjects['ffffff'];
                        this.block_id = MapObjects['ffffff'];
                    }
                }
                if(Engine.facing == 1){
                    if(Engine.fullMap[this.x][this.y-1].block_id == MapObjects['ffffff']){
                        Engine.fullMap[this.x][this.y-1].block_id = this.block_id;
                        this.block_id = MapObjects['ffffff'];
                    }
                    if(Engine.fullMap[this.x][this.y-1].block_id == MapObjects['667731']){
                        Engine.fullMap[this.x][this.y-1].block_id = MapObjects['ffffff'];
                        this.block_id = MapObjects['ffffff'];
                    }
                }
                if(Engine.facing == 3){
                    if(Engine.fullMap[this.x][this.y+1].block_id == MapObjects['ffffff']){
                        Engine.fullMap[this.x][this.y+1].block_id = this.block_id;
                        this.block_id = MapObjects['ffffff'];
                    }
                    if(Engine.fullMap[this.x][this.y+1].block_id == MapObjects['667731']){
                        Engine.fullMap[this.x][this.y+1].block_id = MapObjects['ffffff'];
                        this.block_id = MapObjects['ffffff'];
                    }
                }
            }
        },
        'healthBar' : {
            uuid        : 'healthBar',
            name        : 'Health Bar',
            solid       : false,
            moveable    : false,
            type        : 'item',
            anim        : [
                {x: 5, y: 7},
                {x: 6, y: 7},
                {x: 7, y: 7},
                {x: 8, y: 7},
                {x: 9, y: 7},
            ]
        }
    
    };



//Notes
//
//  2.
//  Make a Pokal, Pokal is end of level, Walk on it and level ends
//  Make End of Level Screen
//  Make load new map function
//  3. 
//  Make Fire hurt
//  Make Die Screen Function
//  
//  Fix up code... make it look good, add comments
//  Fix walking
//      Fix Boulder Rolling
