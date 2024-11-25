function base_extrude_4_6000000000000005_outline_fn(){
    return new CSG.Path2D([[85.3375588,-58.5556058],[89.7367747,-100.411349]]).appendPoint([91.1141023,-115.7735897]).appendArc([92.1101072,-116.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([165.9503019,-116.6842912]).appendArc([166.175253,-116.7099211],{"radius":1,"clockwise":true,"large":false}).appendPoint([182.7155249,-120.5285438]).appendArc([182.9289449,-120.6041198],{"radius":1,"clockwise":true,"large":false}).appendPoint([199.7927104,-128.8291278]).appendArc([201.1298756,-128.3687049],{"radius":1,"clockwise":false,"large":false}).appendPoint([208.5821851,-113.089206]).appendArc([208.1217622,-111.7520408],{"radius":1,"clockwise":false,"large":false}).appendPoint([202.9483666,-109.2288073]).appendPoint([202.9483666,-57.6842911]).appendArc([202.4483666,-57.1842911],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([184.1483667,-57.1842911]).appendPoint([184.1483667,-40.1842912]).appendArc([183.1483667,-39.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([145.3983667,-39.1842912]).appendPoint([145.3983667,-36.4342912]).appendArc([144.3983667,-35.4342912],{"radius":1,"clockwise":false,"large":false}).appendPoint([125.8983667,-35.4342912]).appendArc([124.8983667,-36.4342912],{"radius":1,"clockwise":false,"large":false}).appendPoint([124.8983667,-39.1658909]).appendPoint([124.5472684,-39.1842912]).appendPoint([124.4456168,-39.1842912]).appendArc([123.7783532,-38.9742453],{"radius":1,"clockwise":false,"large":false}).appendPoint([119.7704378,-39.1842912]).appendPoint([91.1468551,-39.1842912]).appendArc([90.1468562,-40.1827784],{"radius":1,"clockwise":false,"large":false}).appendPoint([90.1213428,-57.0473015]).appendPoint([86.2275522,-57.4565554]).appendArc([85.3375588,-58.5556058],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[94.3449525,-113.1632229],"radius":1.8})
.union(
    CAG.circle({"center":[198.6292952,-101.5592457],"radius":1.8})
).union(
    CAG.circle({"center":[135.1483667,-91.6842912],"radius":1.8})
).union(
    CAG.circle({"center":[181.1483666,-42.6842911],"radius":1.8})
).union(
    CAG.circle({"center":[94.2509345,-45.3012958],"radius":1.8})
)).extrude({ offset: [0, 0, 4.6000000000000005] });
}


function base_extrude_4_5_outline_fn(){
    return new CSG.Path2D([[85.3375588,-58.5556058],[89.7367747,-100.411349]]).appendPoint([91.1141023,-115.7735897]).appendArc([92.1101072,-116.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([165.9503019,-116.6842912]).appendArc([166.175253,-116.7099211],{"radius":1,"clockwise":true,"large":false}).appendPoint([182.7155249,-120.5285438]).appendArc([182.9289449,-120.6041198],{"radius":1,"clockwise":true,"large":false}).appendPoint([199.7927104,-128.8291278]).appendArc([201.1298756,-128.3687049],{"radius":1,"clockwise":false,"large":false}).appendPoint([208.5821851,-113.089206]).appendArc([208.1217622,-111.7520408],{"radius":1,"clockwise":false,"large":false}).appendPoint([202.9483666,-109.2288073]).appendPoint([202.9483666,-57.6842911]).appendArc([202.4483666,-57.1842911],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([184.1483667,-57.1842911]).appendPoint([184.1483667,-40.1842912]).appendArc([183.1483667,-39.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([145.3983667,-39.1842912]).appendPoint([145.3983667,-36.4342912]).appendArc([144.3983667,-35.4342912],{"radius":1,"clockwise":false,"large":false}).appendPoint([125.8983667,-35.4342912]).appendArc([124.8983667,-36.4342912],{"radius":1,"clockwise":false,"large":false}).appendPoint([124.8983667,-39.1658909]).appendPoint([124.5472684,-39.1842912]).appendPoint([124.4456168,-39.1842912]).appendArc([123.7783532,-38.9742453],{"radius":1,"clockwise":false,"large":false}).appendPoint([119.7704378,-39.1842912]).appendPoint([91.1468551,-39.1842912]).appendArc([90.1468562,-40.1827784],{"radius":1,"clockwise":false,"large":false}).appendPoint([90.1213428,-57.0473015]).appendPoint([86.2275522,-57.4565554]).appendArc([85.3375588,-58.5556058],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[94.3449525,-113.1632229],"radius":1.8})
.union(
    CAG.circle({"center":[198.6292952,-101.5592457],"radius":1.8})
).union(
    CAG.circle({"center":[135.1483667,-91.6842912],"radius":1.8})
).union(
    CAG.circle({"center":[181.1483666,-42.6842911],"radius":1.8})
).union(
    CAG.circle({"center":[94.2509345,-45.3012958],"radius":1.8})
)).extrude({ offset: [0, 0, 4.5] });
}




                function _case_skirt_case_fn() {
                    

                // creating part 0 of case _case_skirt
                let _case_skirt__part_0 = base_extrude_4_6000000000000005_outline_fn();

                // make sure that rotations are relative
                let _case_skirt__part_0_bounds = _case_skirt__part_0.getBounds();
                let _case_skirt__part_0_x = _case_skirt__part_0_bounds[0].x + (_case_skirt__part_0_bounds[1].x - _case_skirt__part_0_bounds[0].x) / 2
                let _case_skirt__part_0_y = _case_skirt__part_0_bounds[0].y + (_case_skirt__part_0_bounds[1].y - _case_skirt__part_0_bounds[0].y) / 2
                _case_skirt__part_0 = translate([-_case_skirt__part_0_x, -_case_skirt__part_0_y, 0], _case_skirt__part_0);
                _case_skirt__part_0 = rotate([0,0,0], _case_skirt__part_0);
                _case_skirt__part_0 = translate([_case_skirt__part_0_x, _case_skirt__part_0_y, 0], _case_skirt__part_0);

                _case_skirt__part_0 = translate([0,0,1], _case_skirt__part_0);
                let result = _case_skirt__part_0;
                
            
                    return result;
                }
            
            

                function _case_upper_case_fn() {
                    

                // creating part 0 of case _case_upper
                let _case_upper__part_0 = base_extrude_4_5_outline_fn();

                // make sure that rotations are relative
                let _case_upper__part_0_bounds = _case_upper__part_0.getBounds();
                let _case_upper__part_0_x = _case_upper__part_0_bounds[0].x + (_case_upper__part_0_bounds[1].x - _case_upper__part_0_bounds[0].x) / 2
                let _case_upper__part_0_y = _case_upper__part_0_bounds[0].y + (_case_upper__part_0_bounds[1].y - _case_upper__part_0_bounds[0].y) / 2
                _case_upper__part_0 = translate([-_case_upper__part_0_x, -_case_upper__part_0_y, 0], _case_upper__part_0);
                _case_upper__part_0 = rotate([0,0,0], _case_upper__part_0);
                _case_upper__part_0 = translate([_case_upper__part_0_x, _case_upper__part_0_y, 0], _case_upper__part_0);

                _case_upper__part_0 = translate([0,0,5.6000000000000005], _case_upper__part_0);
                let result = _case_upper__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _case_skirt_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = _case_upper_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.union(case__part_1);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        