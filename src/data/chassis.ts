export interface Chassis {
  code: string
  domain: string
  name: string
  years: string
  class: string
  bodies: string[]
  priority: 'high' | 'medium' | 'low'
}

export const chassisData: Chassis[] = [
  // Pre-war
  { code: 'W07',   domain: 'mb-w07.com',   name: 'Nurburg 460/500',      years: '1928–1939', class: 'Pre-war',   bodies: ['Limousine','Cabriolet'], priority: 'low' },
  { code: 'W29',   domain: 'mb-w29.com',   name: '500K / 540K',          years: '1934–1943', class: 'Pre-war',   bodies: ['Roadster','Cabriolet'],  priority: 'high' },
  { code: 'W100',  domain: 'mb-w100.com',  name: '600 Grosser',          years: '1963–1981', class: 'S-Class',   bodies: ['Limousine','Pullman'],    priority: 'high' },
  { code: 'W105',  domain: 'mb-w105.com',  name: '219 / 220a',           years: '1954–1959', class: 'S-Class',   bodies: ['Sedan'],                 priority: 'low' },
  { code: 'W108',  domain: 'mb-w108.com',  name: '250S / 280SE',         years: '1965–1972', class: 'S-Class',   bodies: ['Sedan'],                 priority: 'medium' },
  { code: 'W109',  domain: 'mb-w109.com',  name: '300SEL',               years: '1965–1972', class: 'S-Class',   bodies: ['Sedan'],                 priority: 'medium' },
  { code: 'W110',  domain: 'mb-w110.com',  name: '190c / 200 Fintail',   years: '1961–1968', class: 'E-Class',   bodies: ['Sedan'],                 priority: 'low' },
  { code: 'W111',  domain: 'mb-w111.com',  name: '220S / 220SE Fintail', years: '1959–1971', class: 'E-Class',   bodies: ['Sedan','Coupe','Cabrio'], priority: 'medium' },
  { code: 'W112',  domain: 'mb-w112.com',  name: '300SE Fintail',        years: '1961–1965', class: 'S-Class',   bodies: ['Sedan','Coupe','Cabrio'], priority: 'low' },
  { code: 'W113',  domain: 'mb-w113.com',  name: 'Pagoda SL',            years: '1963–1971', class: 'SL-Class',  bodies: ['Roadster'],              priority: 'high' },
  { code: 'W114',  domain: 'mb-w114.com',  name: '250 / 280 Stroke 8',   years: '1968–1976', class: 'E-Class',   bodies: ['Sedan','Coupe'],         priority: 'medium' },
  { code: 'W115',  domain: 'mb-w115.com',  name: '200 / 220 Stroke 8',   years: '1968–1977', class: 'E-Class',   bodies: ['Sedan'],                 priority: 'medium' },
  { code: 'W116',  domain: 'mb-w116.com',  name: 'S-Class gen 1',        years: '1972–1980', class: 'S-Class',   bodies: ['Sedan'],                 priority: 'high' },
  { code: 'W120',  domain: 'mb-w120.com',  name: 'Ponton 180 / 190',     years: '1953–1962', class: 'E-Class',   bodies: ['Sedan'],                 priority: 'low' },
  { code: 'W121',  domain: 'mb-w121.com',  name: 'Ponton 190SL',         years: '1955–1963', class: 'SL-Class',  bodies: ['Roadster'],              priority: 'high' },
  { code: 'W123',  domain: 'mb-w123.com',  name: 'E-Class W123',         years: '1976–1985', class: 'E-Class',   bodies: ['Sedan','Estate','Coupe'], priority: 'high' },
  { code: 'W124',  domain: 'mb-w124.com',  name: 'E-Class W124',         years: '1984–1997', class: 'E-Class',   bodies: ['Sedan','Estate','Coupe','Cabrio'], priority: 'high' },
  { code: 'W126',  domain: 'mb-w126.com',  name: 'S-Class W126',         years: '1979–1991', class: 'S-Class',   bodies: ['Sedan','Coupe'],         priority: 'high' },
  { code: 'W128',  domain: 'mb-w128.com',  name: '220SE Coupe',          years: '1956–1960', class: 'S-Class',   bodies: ['Coupe','Cabrio'],        priority: 'low' },
  { code: 'W140',  domain: 'mbw140.com',   name: 'S-Class W140',         years: '1991–1998', class: 'S-Class',   bodies: ['Sedan','Coupe'],         priority: 'high' },
  { code: 'W163',  domain: 'mb-w163.com',  name: 'ML-Class gen 1',       years: '1997–2005', class: 'ML-Class',  bodies: ['SUV'],                   priority: 'medium' },
  { code: 'W164',  domain: 'mb-w164.com',  name: 'ML-Class gen 2',       years: '2005–2011', class: 'ML-Class',  bodies: ['SUV'],                   priority: 'medium' },
  { code: 'W166',  domain: 'mb-w166.com',  name: 'ML-Class gen 3',       years: '2011–2015', class: 'ML-Class',  bodies: ['SUV'],                   priority: 'medium' },
  { code: 'W167',  domain: 'mb-w167.com',  name: 'GLE gen 4',            years: '2019–present', class: 'GLE-Class', bodies: ['SUV'],                priority: 'high' },
  { code: 'W168',  domain: 'mb-w168.com',  name: 'A-Class gen 1',        years: '1997–2004', class: 'A-Class',   bodies: ['Hatchback'],             priority: 'low' },
  { code: 'W169',  domain: 'mb-w169.com',  name: 'A-Class gen 2',        years: '2005–2012', class: 'A-Class',   bodies: ['Hatchback'],             priority: 'low' },
  { code: 'W176',  domain: 'mb-w176.com',  name: 'A-Class gen 3',        years: '2012–2018', class: 'A-Class',   bodies: ['Hatchback'],             priority: 'medium' },
  { code: 'W177',  domain: 'mb-w177.com',  name: 'A-Class gen 4',        years: '2018–present', class: 'A-Class', bodies: ['Hatchback','Sedan'],    priority: 'high' },
  { code: 'W180',  domain: 'mb-w180.com',  name: '220S Ponton',          years: '1954–1960', class: 'S-Class',   bodies: ['Sedan'],                 priority: 'low' },
  { code: 'W186',  domain: 'mb-w186.com',  name: '300 Adenauer',         years: '1951–1957', class: 'S-Class',   bodies: ['Limousine'],             priority: 'medium' },
  { code: 'W187',  domain: 'mb-w187.com',  name: '220 Cabrio',           years: '1951–1955', class: 'E-Class',   bodies: ['Coupe','Cabrio'],        priority: 'low' },
  { code: 'W188',  domain: 'mb-w188.com',  name: '300S Roadster',        years: '1951–1958', class: 'SL-Class',  bodies: ['Roadster','Coupe'],      priority: 'high' },
  { code: 'W189',  domain: 'mb-w189.com',  name: '300d Adenauer',        years: '1957–1962', class: 'S-Class',   bodies: ['Limousine'],             priority: 'medium' },
  { code: 'W198',  domain: 'mb-w198.com',  name: '300SL Gullwing',       years: '1954–1963', class: 'SL-Class',  bodies: ['Gullwing','Roadster'],   priority: 'high' },
  { code: 'W201',  domain: 'mb-w201.com',  name: '190E / 2.3-16',        years: '1982–1993', class: 'C-Class',   bodies: ['Sedan'],                 priority: 'high' },
  { code: 'W202',  domain: 'mb-w202.com',  name: 'C-Class gen 1',        years: '1993–2001', class: 'C-Class',   bodies: ['Sedan','Estate'],        priority: 'high' },
  { code: 'W203',  domain: 'mb-w203.com',  name: 'C-Class gen 2',        years: '2000–2007', class: 'C-Class',   bodies: ['Sedan','Estate','Coupe'], priority: 'high' },
  { code: 'W204',  domain: 'mb-w204.com',  name: 'C-Class gen 3',        years: '2007–2014', class: 'C-Class',   bodies: ['Sedan','Estate','Coupe'], priority: 'high' },
  { code: 'W205',  domain: 'mb-w205.com',  name: 'C-Class gen 4',        years: '2014–2021', class: 'C-Class',   bodies: ['Sedan','Estate','Coupe','Cabrio'], priority: 'high' },
  { code: 'W209',  domain: 'mb-w209.com',  name: 'CLK gen 2',            years: '2002–2010', class: 'CLK-Class', bodies: ['Coupe','Cabrio'],        priority: 'medium' },
  { code: 'W210',  domain: 'mb-w210.com',  name: 'E-Class W210',         years: '1995–2003', class: 'E-Class',   bodies: ['Sedan','Estate'],        priority: 'high' },
  { code: 'W211',  domain: 'mb-w211.com',  name: 'E-Class W211',         years: '2002–2009', class: 'E-Class',   bodies: ['Sedan','Estate'],        priority: 'high' },
  { code: 'W212',  domain: 'mb-w212.com',  name: 'E-Class W212',         years: '2009–2016', class: 'E-Class',   bodies: ['Sedan','Estate','Coupe'], priority: 'high' },
  { code: 'W213',  domain: 'mb-w213.com',  name: 'E-Class W213',         years: '2016–2023', class: 'E-Class',   bodies: ['Sedan','Estate','Coupe','Cabrio'], priority: 'high' },
  { code: 'W214',  domain: 'mb-w214.com',  name: 'E-Class W214',         years: '2023–present', class: 'E-Class', bodies: ['Sedan','Estate'],       priority: 'high' },
  { code: 'W215',  domain: 'mb-w215.com',  name: 'CL-Class gen 1',       years: '1998–2006', class: 'CL-Class',  bodies: ['Coupe'],                 priority: 'medium' },
  { code: 'W216',  domain: 'mb-w216.com',  name: 'CL-Class gen 2',       years: '2006–2014', class: 'CL-Class',  bodies: ['Coupe'],                 priority: 'medium' },
  { code: 'W219',  domain: 'mb-w219.com',  name: 'CLS gen 1',            years: '2004–2010', class: 'CLS-Class', bodies: ['Coupe'],                 priority: 'medium' },
  { code: 'W220',  domain: 'mb-w220.com',  name: 'S-Class W220',         years: '1998–2005', class: 'S-Class',   bodies: ['Sedan'],                 priority: 'high' },
  { code: 'W221',  domain: 'mb-w221.com',  name: 'S-Class W221',         years: '2005–2013', class: 'S-Class',   bodies: ['Sedan'],                 priority: 'high' },
  { code: 'W222',  domain: 'mb-w222.com',  name: 'S-Class W222',         years: '2013–2020', class: 'S-Class',   bodies: ['Sedan'],                 priority: 'high' },
  { code: 'W223',  domain: 'mb-w223.com',  name: 'S-Class W223',         years: '2020–present', class: 'S-Class', bodies: ['Sedan'],                priority: 'high' },
  { code: 'W245',  domain: 'mb-w245.com',  name: 'B-Class gen 1',        years: '2005–2011', class: 'B-Class',   bodies: ['MPV'],                   priority: 'low' },
  { code: 'W246',  domain: 'mb-w246.com',  name: 'B-Class gen 2',        years: '2011–2018', class: 'B-Class',   bodies: ['MPV'],                   priority: 'low' },
  { code: 'W247',  domain: 'mb-w247.com',  name: 'B-Class gen 3',        years: '2018–present', class: 'B-Class', bodies: ['MPV'],                  priority: 'low' },
  { code: 'W251',  domain: 'mb-w251.com',  name: 'R-Class',              years: '2005–2013', class: 'R-Class',   bodies: ['MPV'],                   priority: 'low' },
  { code: 'W253',  domain: 'mb-w253.com',  name: 'GLC gen 1',            years: '2015–2022', class: 'GLC-Class', bodies: ['SUV'],                   priority: 'high' },
  { code: 'W290',  domain: 'mb-w290.com',  name: 'AMG GT 4-door',        years: '2018–present', class: 'AMG GT', bodies: ['Sedan'],                 priority: 'high' },
  { code: 'W447',  domain: 'mb-w447.com',  name: 'V-Class gen 2',        years: '2014–present', class: 'V-Class', bodies: ['Van'],                  priority: 'medium' },
  { code: 'W460',  domain: 'mb-w460.com',  name: 'G-Class gen 1',        years: '1979–1991', class: 'G-Class',   bodies: ['SUV'],                   priority: 'high' },
  { code: 'W461',  domain: 'mb-w461.com',  name: 'G-Class military',     years: '1992–present', class: 'G-Class', bodies: ['SUV'],                  priority: 'medium' },
  { code: 'W463',  domain: 'mb-w463.com',  name: 'G-Class W463',         years: '1989–2018', class: 'G-Class',   bodies: ['SUV'],                   priority: 'high' },
  { code: 'W463A', domain: 'mb-w463a.com', name: 'G-Class W463A',        years: '2018–present', class: 'G-Class', bodies: ['SUV'],                  priority: 'high' },
  { code: 'W639',  domain: 'mb-w639.com',  name: 'Vito / Viano gen 2',   years: '2003–2014', class: 'V-Class',   bodies: ['Van'],                   priority: 'low' },
  { code: 'W906',  domain: 'mb-w906.com',  name: 'Sprinter gen 2',       years: '2006–2018', class: 'Sprinter',  bodies: ['Van'],                   priority: 'medium' },
  { code: 'W907',  domain: 'mb-w907.com',  name: 'Sprinter gen 3',       years: '2018–present', class: 'Sprinter', bodies: ['Van'],                 priority: 'medium' },
  { code: 'A124',  domain: 'mb-a124.com',  name: 'E-Class Cabriolet',    years: '1991–1997', class: 'E-Class',   bodies: ['Cabrio'],                priority: 'high' },
  { code: 'C107',  domain: 'mb-c107.com',  name: '450SLC / SLC',         years: '1971–1981', class: 'SL-Class',  bodies: ['Coupe'],                 priority: 'medium' },
  { code: 'C117',  domain: 'mbc117.com',   name: 'CLA gen 1',            years: '2013–2019', class: 'CLA-Class', bodies: ['Coupe','Shooting Brake'], priority: 'high' },
  { code: 'C118',  domain: 'mbc118.com',   name: 'CLA gen 2',            years: '2019–present', class: 'CLA-Class', bodies: ['Coupe','Shooting Brake'], priority: 'high' },
  { code: 'C124',  domain: 'mb-c124.com',  name: 'E-Class Coupe W124',   years: '1987–1997', class: 'E-Class',   bodies: ['Coupe'],                 priority: 'high' },
  { code: 'C126',  domain: 'mb-c126.com',  name: 'SEC Coupe',            years: '1980–1991', class: 'S-Class',   bodies: ['Coupe'],                 priority: 'high' },
  { code: 'C178',  domain: 'mb-c178.com',  name: 'AMG GT Roadster',      years: '2015–2021', class: 'AMG GT',    bodies: ['Roadster','Coupe'],      priority: 'high' },
  { code: 'C190',  domain: 'mb-c190.com',  name: 'AMG GT C190',          years: '2014–2021', class: 'AMG GT',    bodies: ['Coupe','Roadster'],      priority: 'high' },
  { code: 'C208',  domain: 'mb-c208.com',  name: 'CLK gen 1',            years: '1997–2003', class: 'CLK-Class', bodies: ['Coupe','Cabrio'],        priority: 'medium' },
  { code: 'C209',  domain: 'mb-c209.com',  name: 'CLK gen 2',            years: '2002–2010', class: 'CLK-Class', bodies: ['Coupe','Cabrio'],        priority: 'medium' },
  { code: 'C215',  domain: 'mb-c215.com',  name: 'CL-Class C215',        years: '1998–2006', class: 'CL-Class',  bodies: ['Coupe'],                 priority: 'medium' },
  { code: 'C216',  domain: 'mb-c216.com',  name: 'CL-Class C216',        years: '2006–2014', class: 'CL-Class',  bodies: ['Coupe'],                 priority: 'medium' },
  { code: 'C257',  domain: 'mb-c257.com',  name: 'CLS gen 3',            years: '2018–2023', class: 'CLS-Class', bodies: ['Coupe'],                 priority: 'medium' },
  { code: 'H247',  domain: 'mb-h247.com',  name: 'GLA gen 2',            years: '2020–present', class: 'GLA-Class', bodies: ['SUV'],                priority: 'medium' },
  { code: 'R107',  domain: 'mb-r107.com',  name: 'SL R107',              years: '1971–1989', class: 'SL-Class',  bodies: ['Roadster'],              priority: 'high' },
  { code: 'R129',  domain: 'mbr129.com',   name: 'SL R129',              years: '1989–2001', class: 'SL-Class',  bodies: ['Roadster'],              priority: 'high' },
  { code: 'R170',  domain: 'mb-r170.com',  name: 'SLK gen 1',            years: '1996–2004', class: 'SLK-Class', bodies: ['Roadster'],              priority: 'medium' },
  { code: 'R171',  domain: 'mb-r171.com',  name: 'SLK gen 2',            years: '2004–2011', class: 'SLK-Class', bodies: ['Roadster'],              priority: 'medium' },
  { code: 'R172',  domain: 'mb-r172.com',  name: 'SLC / SLK gen 3',      years: '2011–2020', class: 'SLK-Class', bodies: ['Roadster'],              priority: 'medium' },
  { code: 'R230',  domain: 'mb-r230.com',  name: 'SL R230',              years: '2001–2012', class: 'SL-Class',  bodies: ['Roadster'],              priority: 'high' },
  { code: 'R231',  domain: 'mb-r231.com',  name: 'SL R231',              years: '2012–2021', class: 'SL-Class',  bodies: ['Roadster'],              priority: 'high' },
  { code: 'S124',  domain: 'mb-s124.com',  name: 'E-Class Estate W124',  years: '1985–1996', class: 'E-Class',   bodies: ['Estate'],                priority: 'high' },
  { code: 'X156',  domain: 'mb-x156.com',  name: 'GLA gen 1',            years: '2013–2019', class: 'GLA-Class', bodies: ['SUV'],                   priority: 'medium' },
  { code: 'X164',  domain: 'mb-x164.com',  name: 'GL-Class gen 1',       years: '2006–2012', class: 'GL-Class',  bodies: ['SUV'],                   priority: 'medium' },
  { code: 'X166',  domain: 'mb-x166.com',  name: 'GL-Class gen 2',       years: '2012–2019', class: 'GL-Class',  bodies: ['SUV'],                   priority: 'medium' },
  { code: 'X167',  domain: 'mb-x167.com',  name: 'GLS gen 2',            years: '2019–present', class: 'GLS-Class', bodies: ['SUV'],                priority: 'high' },
  { code: 'X204',  domain: 'mb-x204.com',  name: 'GLK-Class',            years: '2008–2015', class: 'GLK-Class', bodies: ['SUV'],                   priority: 'medium' },
  { code: 'X247',  domain: 'mb-x247.com',  name: 'GLB-Class',            years: '2019–present', class: 'GLB-Class', bodies: ['SUV'],                priority: 'medium' },
  { code: 'X253',  domain: 'mb-x253.com',  name: 'GLC gen 1 Coupe',      years: '2015–2022', class: 'GLC-Class', bodies: ['Coupe'],                 priority: 'medium' },
  { code: 'X254',  domain: 'mb-x254.com',  name: 'GLC gen 2',            years: '2022–present', class: 'GLC-Class', bodies: ['SUV'],                priority: 'high' },
  { code: 'X290',  domain: 'mb-x290.com',  name: 'AMG GT X290',          years: '2018–present', class: 'AMG GT', bodies: ['Coupe'],                 priority: 'high' },
]

export const getChassisUrl = (chassis: Chassis): string => {
  return `https://${chassis.domain}`
}

export const getChassisSlug = (chassis: Chassis): string => {
  return chassis.code.toLowerCase()
}

export const highPriorityChassis = chassisData.filter(c => c.priority === 'high')
export const featuredChassis = chassisData.filter(c =>
  ['W124','W140','R129','W126','W198','W113','W201','W463'].includes(c.code)
)
