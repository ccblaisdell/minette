function base_extrude_1_outline_fn(){
    return new CSG.Path2D([[85.6123213,-58.7781041],[91.604389,-115.7888197]]).appendArc([92.5989109,-116.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([112.1483666,-116.6842912]).appendArc([113.1483666,-117.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([143.1483666,-117.6842912]).appendArc([144.1483666,-116.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([165.9503019,-116.6842912]).appendArc([166.175253,-116.7099211],{"radius":1,"clockwise":true,"large":false}).appendPoint([182.7155249,-120.5285438]).appendArc([182.9289449,-120.6041198],{"radius":1,"clockwise":true,"large":false}).appendPoint([199.7927104,-128.8291278]).appendArc([201.1298756,-128.3687049],{"radius":1,"clockwise":false,"large":false}).appendPoint([208.5821851,-113.089206]).appendArc([208.1217622,-111.7520408],{"radius":1,"clockwise":false,"large":false}).appendPoint([202.4483666,-108.984941]).appendPoint([202.4483666,-58.6842911]).appendArc([201.4483666,-57.6842911],{"radius":1,"clockwise":false,"large":false}).appendPoint([184.1483667,-57.6842911]).appendPoint([184.1483667,-40.1842912]).appendArc([183.1483667,-39.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([145.1483667,-39.1842912]).appendPoint([145.1483667,-36.6842912]).appendArc([144.1483667,-35.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([126.1483667,-35.6842912]).appendArc([125.1483667,-36.6842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([125.1483667,-39.152789]).appendPoint([124.547268,-39.1842912]).appendPoint([91.1483667,-39.1842912]).appendArc([90.1483667,-40.1842912],{"radius":1,"clockwise":false,"large":false}).appendPoint([90.1483667,-57.2958382]).appendPoint([86.5023147,-57.6790537]).appendArc([85.6123213,-58.7781041],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function silicone_base_case_fn() {
                    

                // creating part 0 of case silicone_base
                let silicone_base__part_0 = base_extrude_1_outline_fn();

                // make sure that rotations are relative
                let silicone_base__part_0_bounds = silicone_base__part_0.getBounds();
                let silicone_base__part_0_x = silicone_base__part_0_bounds[0].x + (silicone_base__part_0_bounds[1].x - silicone_base__part_0_bounds[0].x) / 2
                let silicone_base__part_0_y = silicone_base__part_0_bounds[0].y + (silicone_base__part_0_bounds[1].y - silicone_base__part_0_bounds[0].y) / 2
                silicone_base__part_0 = translate([-silicone_base__part_0_x, -silicone_base__part_0_y, 0], silicone_base__part_0);
                silicone_base__part_0 = rotate([0,0,0], silicone_base__part_0);
                silicone_base__part_0 = translate([silicone_base__part_0_x, silicone_base__part_0_y, 0], silicone_base__part_0);

                silicone_base__part_0 = translate([0,0,0], silicone_base__part_0);
                let result = silicone_base__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return silicone_base_case_fn();
            }

        