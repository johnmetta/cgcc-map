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
     // List of courses. Each course is a list, with the designator, number, and title. This allows us to link to /courses/EET/112 or something if we want :)
     'courses': [ 
                  ['EET', '112', 'Electrical Circuit Analysis'],
                  ['EET', '122', 'Digital Systems II']
                ],
     'flickrCode': '72157628815361409'
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
     'courses': [ 
                  ['EET', '112', 'Electrical Circuit Analysis'],
                  ['EET', '122', 'Digital Systems II']
                ],
     'flickrCode': '72157628815197091'
   },
   {
     'name': 'LabVolt Lab',
     'coordinates': [45.590070, -121.188833],
     'location': 'Building Four',
     'text': 'This is the LabVolt EMS Trainer lab. College purchased the LabVolt equipment so students could become familiar with motors, motor controls, and AC/DC circuits in higher voltage (120, 220) situations. This is especially important because when working in any field of renewable energy you have to deal with shifts of power. This lab has inductor and capacitor banks for experiments dealing with phase shift in AC systems, and many different types of motors for experiments.',
     'video': '5FrP3sw2QUU',
     'courses': [ 
                  ['EET', '112', 'Electrical Circuit Analysis'],
                  ['EET', '122', 'Digital Systems II']
                ],
     'flickrCode': '72157628815233465'
   },
   {
     'name': 'Vertical Axis Turbine',
     'coordinates': [45.589683, -121.188631],
     'location': 'West Lawn',
     'text': 'Here is the experimental Vertical Axis Turbine sometimes called the "urban turbine". This wind turbine is very unique! It has a generator on the bottom, will turn both ways to catch the wind, and catches the wind at low speeds around 10 mph. This is a working turbine that can produce around 2.7 kw of energy back into the Wasco County PUD power-grid. The urban turbine was donated by a company called Skyron.',
     'video': 'bUGRMLplXVg',
     'courses': [ 
                  ['EET', '112', 'Electrical Circuit Analysis'],
                  ['EET', '122', 'Digital Systems II']
                ],
     'flickrCode': '72157628815369421'
   },
   {
     'name': 'Mechanics Lab and Hydraulics Lab',
     'coordinates': [45.588080, -121.188439],
     'location': 'Building Eleven',
     'text': 'This building holds the Mechanics Lab and the Hydraulics Lab. First-year students study mechanics, hydraulics, and basic wind-turbine maintenance here. There are eight hydraulic training stations, and students conduct hydraulic experiments to learn about cylinders, valves, and flow rates. There is also a wide variety of mechanical tools here. One of the large mechanical projects includes dismantling a V27 nacelle to the ground (using proper safety techniques with a crane and forklift).',
     'video': 'hcQpsr4JrVo',
     'courses': [ 
                  ['EET', '112', 'Electrical Circuit Analysis'],
                  ['EET', '122', 'Digital Systems II']
                ],
     'flickrCode': '72157628815291897'
   }
];

