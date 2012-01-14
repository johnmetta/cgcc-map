/** 
 * Markers array.
 * @type {Object}
 * This is where you can add markers and change marker information
 */
 
 // Buildings are in order of Stop #
 var buildings = [
   {
     // Title of the building
     'name': 'Highly Automated Systems Lab',
     // Coordinates
     // Nudged version, that separates from stop #2 better
     'coordinates': [45.590453, -121.189350],     
     // Original coordinates
     //'coordinates': [45.590453, -121.189289],
     // Location designation
     'location': 'Building One, First Floor',
     // Box text
     'text': 'This Highly Automated Systems Unit (also called the HAS 200) was donated by Intel to teach automation and Programmable Logic Controllers (PLCs). It is one of only three operating units on the west coast. Second-year RET students use this lab to learn about logic input/outputs, PLCs, and networking. PLCs are like mini-computers that take inputs (wind speed, etc.) and respond with outputs (turn motors, etc.).',
     // YouTube video (ID only, not entire link URL)
     'video': 'N_Iih1P3LRs',
     // Position of pin: pin, pin_star, pin_sleft, pin_sright
     // (See: http://code.google.com/apis/chart/image/docs/gallery/dynamic_icons.html#pins)
     'pin_style': 'pin_star'
   },
   {
     'name': 'Digital Lab and Computer Lab',
     // Nudged version, that separates from stop #2 better
     'coordinates': [45.590447, -121.189200],
     // Original coordinates
     // 'coordinates': [45.590447, -121.189258],
     'location': 'Building One, Room 365',
     'text': 'This Digital Electronics Lab is where second-year RET students move into more advanced electronic studies. The equipment in this lab is digital, and it includes oscilloscopes, digital multimeters, function generators, and power suppliers. Students learn how to sauder circuits, and one class even builds working transistor radios. This Computer Lab is where second-year RET students do circuit simulation and complete homework.',
     'video': 'OjyOis1dzt0',
     'pin_style': 'pin_sleft'
   },
   {
     'name': 'LabVolt Lab',
     'coordinates': [45.590070, -121.188833],
     'location': 'Building Four',
     'text': 'This is the LabVolt EMS Trainer lab. College purchased the LabVolt equipment so students could become familiar with motors, motor controls, and AC/DC circuits in higher voltage (120, 220) situations. This is especially important because when working in any field of renewable energy you have to deal with shifts of power. This lab has inductor and capacitor banks for experiments dealing with phase shift in AC systems, and many different types of motors for experiments. The LabVolt equipment is also capable of converting AC into DC for some experiments.',
     'video': '5FrP3sw2QUU',
     'pin_style': 'pin'
   },
   {
     'name': 'Vertical Axis Turbine',
     'coordinates': [45.589683, -121.188631],
     'location': 'West Lawn',
     'text': 'Here is the experimental Vertical Axis Turbine sometimes called the "urban turbine". This wind turbine is very unique! It has a generator on the bottom, will turn both ways to catch the wind, and catches the wind at low speeds around 10 mph. This is a working turbine that can produce around 2.7 kw of energy back into the Wasco County PUD power-grid. The urban turbine was donated by a company called Skyron. They were testing this design near the Columbia River over there. Two past RET students took data from the turbine on our regular basis.',
     'video': 'bUGRMLplXVg',
     'pin_style': 'pin'
   },
   {
     'name': 'Mechanics Lab and Hydraulics Lab',
     'coordinates': [45.588080, -121.188439],
     'location': 'Building Eleven',
     'text': 'This building holds the Mechanics Lab and the Hydraulics Lab. First-year students study mechanics, hydraulics, and basic wind-turbine maintenance here. There are eight hydraulic training stations, and students conduct hydraulic experiments to learn about cylinders, valves, and flow rates. There is also a wide variety of mechanical tools here. One of the large mechanical projects includes dismantling a V27 nacelle to the ground (using proper safety techniques with a crane and forklift). This V27 Nacelle is a functioning turbine from a 600 kw generator. One really cool project is a stationary bike connected to a light-bulb. One student – who is now working for Siemens Wind Power - built it to show how mechanical power can be converted to electricity. The alternator is a DC power source, and we can hook-up a light or voltage meter to the output.',
     'video': 'hcQpsr4JrVo',
     'pin_style': 'pin'
   }
];

