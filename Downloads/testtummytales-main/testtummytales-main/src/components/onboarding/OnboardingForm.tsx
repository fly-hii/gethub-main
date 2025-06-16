import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import InviteSupporterForm from "@/components/InviteSupporterForm";
import { Check, ChevronsRight, Edit, Trash2 } from "lucide-react";

const OnboardingForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showLossDialog, setShowLossDialog] = useState(false);
  const [showFirstChildDialog, setShowFirstChildDialog] = useState(false);
  const [showMedication1, setShowMedication1] = useState(false);
  const [showMedication2, setShowMedication2] = useState(false);
  const [showInviteForm, setShowInviteForm] = useState(false);
  const [editingSupporterId, setEditingSupporterId] = useState<string | null>(null);
  const [supporters, setSupporters] = useState([
    {
      id: "1",
      name: "John Doe",
      relationship: "Spouse",
      timeConnected: "6 months ago",
      badge: "Partner",
      initials: "JD"
    },
    {
      id: "2", 
      name: "Mary Smith",
      relationship: "Mother",
      timeConnected: "4 months ago",
      badge: "Family",
      initials: "MS"
    },
    {
      id: "3",
      name: "Emily Johnson", 
      relationship: "Best Friend",
      timeConnected: "3 months ago",
      badge: "Friend",
      initials: "EJ"
    }
  ]);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "female",
    ethnicity: "",
    mobile: "",
    email: "",
    country: "",
    state: "",
    city: "",
    addressLine1: "",
    addressLine2: "",
    zipcode: "",
    isPregnant: "",
    lastPeriod: "",
    dueDate: "",
    PregnancyLoss: false,
    dateOfLoss: "",
    reason: "",
    gestationWeeks: "",
    treatmentLocation: "",
    firstChild: false,
    firstChildDob: "",
    complications: "",
    deliverymethod: "",
    childbornlocation: "",
    gestationalAgeAtBirth: "",
    hasPCP: "",
    hasOBGYN: "",
    insuranceProvider: "",
    medications: "",
    alcoholSmoking: "",
    exercise: "",
    diet: "",
    sleepQuality: "",
    stressLevel: "",
    previousExperience: "",
    birthPlan: "",
    supportPerson: "",
    supportName: "",
    supportEmail: "",
    shareProgress: false,
    sections: {
      pregnancyMap: false,
      calendar: false,
      mealMap: false,
      exercise: false,
      medications: false,
      kickCount: false
    },
    primaryFirst_name: "",
    primaryLast_name: "",
    primaryCountry: "",
    primaryAddressline1: "",
    primaryAddressline2: "",
    primaryCity: "",
    primaryState: "",
    primaryZip_code: "",
    primaryPhonenumber: "",
    obgynFirst_name: "",
    obgynLast_name: "",
    obgynCountry: "",
    obgynAddressline1: "",
    obgynAddressline2: "",
    obgynCity: "",
    obgynState: "",
    obgynZip_code: "",
    obgynPhonenumber: "",
    medication1Name: "",
    medication1Dosage: "",
    medication1Frequency: "",
    medication2Name: "",
    medication2Dosage: "",
    medication2Frequency: "",
    preferredLanguage: "",
    dietaryRestrictions: "",
    exerciseFrequency: "",
    supportSystem: "",
    expectations: "",
    challenges: "",
    wantsPersonalizedResources: "",
    additionalComments: ""
  });

  // Country-State-City data
  const countryStateData = {
    "usa": {
      name: "United States",
      states: {
        "alabama": { name: "Alabama", cities: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa"] },
        "alaska": { name: "Alaska", cities: ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Ketchikan"] },
        "arizona": { name: "Arizona", cities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale"] },
        "arkansas": { name: "Arkansas", cities: ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro"] },
        "california": { name: "California", cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose"] },
        "colorado": { name: "Colorado", cities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood"] },
        "connecticut": { name: "Connecticut", cities: ["Bridgeport", "New Haven", "Hartford", "Stamford", "Waterbury"] },
        "delaware": { name: "Delaware", cities: ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna"] },
        "florida": { name: "Florida", cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee"] },
        "georgia": { name: "Georgia", cities: ["Atlanta", "Augusta", "Columbus", "Savannah", "Athens"] },
        "hawaii": { name: "Hawaii", cities: ["Honolulu", "Pearl City", "Hilo", "Kailua", "Waipahu"] },
        "idaho": { name: "Idaho", cities: ["Boise", "Nampa", "Meridian", "Idaho Falls", "Pocatello"] },
        "illinois": { name: "Illinois", cities: ["Chicago", "Springfield", "Peoria", "Rockford", "Naperville"] },
        "indiana": { name: "Indiana", cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel"] },
        "iowa": { name: "Iowa", cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Waterloo"] },
        "kansas": { name: "Kansas", cities: ["Wichita", "Overland Park", "Kansas City", "Topeka", "Olathe"] },
        "kentucky": { name: "Kentucky", cities: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington"] },
        "louisiana": { name: "Louisiana", cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"] },
        "maine": { name: "Maine", cities: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn"] },
        "maryland": { name: "Maryland", cities: ["Baltimore", "Frederick", "Rockville", "Gaithersburg", "Bowie"] },
        "massachusetts": { name: "Massachusetts", cities: ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge"] },
        "michigan": { name: "Michigan", cities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Lansing"] },
        "minnesota": { name: "Minnesota", cities: ["Minneapolis", "Saint Paul", "Rochester", "Duluth", "Bloomington"] },
        "mississippi": { name: "Mississippi", cities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi"] },
        "missouri": { name: "Missouri", cities: ["Kansas City", "Saint Louis", "Springfield", "Independence", "Columbia"] },
        "montana": { name: "Montana", cities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Butte"] },
        "nebraska": { name: "Nebraska", cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney"] },
        "nevada": { name: "Nevada", cities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks"] },
        "new-hampshire": { name: "New Hampshire", cities: ["Manchester", "Nashua", "Concord", "Derry", "Dover"] },
        "new-jersey": { name: "New Jersey", cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison"] },
        "new-mexico": { name: "New Mexico", cities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell"] },
        "newyork": { name: "New York", cities: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"] },
        "north-carolina": { name: "North Carolina", cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"] },
        "north-dakota": { name: "North Dakota", cities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo"] },
        "ohio": { name: "Ohio", cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"] },
        "oklahoma": { name: "Oklahoma", cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Lawton"] },
        "oregon": { name: "Oregon", cities: ["Portland", "Eugene", "Salem", "Gresham", "Hillsboro"] },
        "pennsylvania": { name: "Pennsylvania", cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading"] },
        "rhode-island": { name: "Rhode Island", cities: ["Providence", "Cranston", "Warwick", "Pawtucket", "East Providence"] },
        "south-carolina": { name: "South Carolina", cities: ["Charleston", "Columbia", "North Charleston", "Mount Pleasant", "Rock Hill"] },
        "south-dakota": { name: "South Dakota", cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown"] },
        "tennessee": { name: "Tennessee", cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville"] },
        "texas": { name: "Texas", cities: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth"] },
        "utah": { name: "Utah", cities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem"] },
        "vermont": { name: "Vermont", cities: ["Burlington", "Essex", "South Burlington", "Colchester", "Rutland"] },
        "virginia": { name: "Virginia", cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News"] },
        "washington": { name: "Washington", cities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"] },
        "west-virginia": { name: "West Virginia", cities: ["Charleston", "Huntington", "Parkersburg", "Wheeling", "Morgantown"] },
        "wisconsin": { name: "Wisconsin", cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"] },
        "wyoming": { name: "Wyoming", cities: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs"] }
      }
    },
    "india": {
      name: "India",
      states: {
        "andhra-pradesh": { name: "Andhra Pradesh", cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool"] },
        "arunachal-pradesh": { name: "Arunachal Pradesh", cities: ["Itanagar", "Naharlagun", "Pasighat", "Namsai", "Tawang"] },
        "assam": { name: "Assam", cities: ["Guwahati", "Silchar", "Dibrugarh", "Nagaon", "Tinsukia"] },
        "bihar": { name: "Bihar", cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"] },
        "chhattisgarh": { name: "Chhattisgarh", cities: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"] },
        "goa": { name: "Goa", cities: ["Panaji", "Vasco da Gama", "Margao", "Mapusa", "Ponda"] },
        "gujarat": { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar"] },
        "haryana": { name: "Haryana", cities: ["Faridabad", "Gurgaon", "Panipat", "Ambala", "Yamunanagar"] },
        "himachal-pradesh": { name: "Himachal Pradesh", cities: ["Shimla", "Dharamshala", "Solan", "Mandi", "Palampur"] },
        "jharkhand": { name: "Jharkhand", cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar"] },
        "karnataka": { name: "Karnataka", cities: ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"] },
        "kerala": { name: "Kerala", cities: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"] },
        "madhya-pradesh": { name: "Madhya Pradesh", cities: ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain"] },
        "maharashtra": { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"] },
        "manipur": { name: "Manipur", cities: ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Kakching"] },
        "meghalaya": { name: "Meghalaya", cities: ["Shillong", "Tura", "Jowai", "Nongpoh", "Baghmara"] },
        "mizoram": { name: "Mizoram", cities: ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib"] },
        "nagaland": { name: "Nagaland", cities: ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha"] },
        "odisha": { name: "Odisha", cities: ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur"] },
        "punjab": { name: "Punjab", cities: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda"] },
        "rajasthan": { name: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer"] },
        "sikkim": { name: "Sikkim", cities: ["Gangtok", "Namchi", "Geyzing", "Mangan", "Jorethang"] },
        "tamilnadu": { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"] },
        "telangana": { name: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"] },
        "tripura": { name: "Tripura", cities: ["Agartala", "Dharmanagar", "Udaipur", "Kailasahar", "Belonia"] },
        "uttarpradesh": { name: "Uttar Pradesh", cities: ["Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut"] },
        "uttarakhand": { name: "Uttarakhand", cities: ["Dehradun", "Haridwar", "Roorkee", "Rudrapur", "Kashipur"] },
        "westbengal": { name: "West Bengal", cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"] },
        "delhi": { name: "Delhi", cities: ["New Delhi", "Delhi Cantonment", "NDMC Area"] },
        "jammu-kashmir": { name: "Jammu and Kashmir", cities: ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Udhampur"] },
        "ladakh": { name: "Ladakh", cities: ["Leh", "Kargil", "Nubra", "Zanskar", "Changthang"] }
      }
    },
    "canada": {
      name: "Canada",
      states: {
        "alberta": { name: "Alberta", cities: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Medicine Hat"] },
        "british-columbia": { name: "British Columbia", cities: ["Vancouver", "Victoria", "Surrey", "Burnaby", "Richmond"] },
        "manitoba": { name: "Manitoba", cities: ["Winnipeg", "Brandon", "Steinbach", "Thompson", "Portage la Prairie"] },
        "new-brunswick": { name: "New Brunswick", cities: ["Saint John", "Moncton", "Fredericton", "Dieppe", "Riverview"] },
        "newfoundland-labrador": { name: "Newfoundland and Labrador", cities: ["St. John's", "Corner Brook", "Mount Pearl", "Paradise", "Grand Falls-Windsor"] },
        "northwest-territories": { name: "Northwest Territories", cities: ["Yellowknife", "Hay River", "Inuvik", "Fort Smith", "Behchoko"] },
        "nova-scotia": { name: "Nova Scotia", cities: ["Halifax", "Cape Breton", "Dartmouth", "Sydney", "Truro"] },
        "nunavut": { name: "Nunavut", cities: ["Iqaluit", "Rankin Inlet", "Arviat", "Baker Lake", "Cambridge Bay"] },
        "ontario": { name: "Ontario", cities: ["Toronto", "Ottawa", "Hamilton", "London", "Windsor"] },
        "prince-edward-island": { name: "Prince Edward Island", cities: ["Charlottetown", "Summerside", "Stratford", "Cornwall", "Montague"] },
        "quebec": { name: "Quebec", cities: ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil"] },
        "saskatchewan": { name: "Saskatchewan", cities: ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw", "Swift Current"] },
        "yukon": { name: "Yukon", cities: ["Whitehorse", "Dawson City", "Watson Lake", "Haines Junction", "Mayo"] }
      }
    },
    "uk": {
      name: "United Kingdom",
      states: {
        "england": { name: "England", cities: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"] },
        "scotland": { name: "Scotland", cities: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Stirling"] },
        "wales": { name: "Wales", cities: ["Cardiff", "Swansea", "Newport", "Wrexham", "Barry"] },
        "northern-ireland": { name: "Northern Ireland", cities: ["Belfast", "Derry", "Lisburn", "Newry", "Armagh"] }
      }
    },
    "australia": {
      name: "Australia",
      states: {
        "new-south-wales": { name: "New South Wales", cities: ["Sydney", "Newcastle", "Wollongong", "Coffs Harbour", "Wagga Wagga"] },
        "victoria": { name: "Victoria", cities: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton"] },
        "queensland": { name: "Queensland", cities: ["Brisbane", "Gold Coast", "Cairns", "Townsville", "Toowoomba"] },
        "western-australia": { name: "Western Australia", cities: ["Perth", "Fremantle", "Bunbury", "Geraldton", "Albany"] },
        "south-australia": { name: "South Australia", cities: ["Adelaide", "Mount Gambier", "Whyalla", "Murray Bridge", "Port Lincoln"] },
        "tasmania": { name: "Tasmania", cities: ["Hobart", "Launceston", "Devonport", "Burnie", "Ulverstone"] },
        "northern-territory": { name: "Northern Territory", cities: ["Darwin", "Alice Springs", "Palmerston", "Katherine", "Nhulunbuy"] },
        "australian-capital-territory": { name: "Australian Capital Territory", cities: ["Canberra"] }
      }
    },
    "germany": {
      name: "Germany",
      states: {
        "baden-wurttemberg": { name: "Baden-Württemberg", cities: ["Stuttgart", "Mannheim", "Karlsruhe", "Freiburg", "Heidelberg"] },
        "bavaria": { name: "Bavaria", cities: ["Munich", "Nuremberg", "Augsburg", "Regensburg", "Ingolstadt"] },
        "berlin": { name: "Berlin", cities: ["Berlin City"] },
        "brandenburg": { name: "Brandenburg", cities: ["Potsdam", "Cottbus", "Brandenburg an der Havel", "Frankfurt (Oder)", "Oranienburg"] },
        "bremen": { name: "Bremen", cities: ["Bremen", "Bremerhaven"] },
        "hamburg": { name: "Hamburg", cities: ["Hamburg City"] },
        "hesse": { name: "Hesse", cities: ["Frankfurt am Main", "Wiesbaden", "Kassel", "Darmstadt", "Offenbach"] },
        "lower-saxony": { name: "Lower Saxony", cities: ["Hanover", "Braunschweig", "Oldenburg", "Osnabrück", "Göttingen"] },
        "mecklenburg-vorpommern": { name: "Mecklenburg-Vorpommern", cities: ["Rostock", "Schwerin", "Neubrandenburg", "Stralsund", "Greifswald"] },
        "north-rhine-westphalia": { name: "North Rhine-Westphalia", cities: ["Cologne", "Düsseldorf", "Dortmund", "Essen", "Duisburg"] },
        "rhineland-palatinate": { name: "Rhineland-Palatinate", cities: ["Mainz", "Ludwigshafen", "Koblenz", "Trier", "Kaiserslautern"] },
        "saarland": { name: "Saarland", cities: ["Saarbrücken", "Neunkirchen", "Homburg", "Völklingen", "Sankt Ingbert"] },
        "saxony": { name: "Saxony", cities: ["Dresden", "Leipzig", "Chemnitz", "Zwickau", "Plauen"] },
        "saxony-anhalt": { name: "Saxony-Anhalt", cities: ["Magdeburg", "Halle", "Dessau-Roßlau", "Wittenberg", "Stendal"] },
        "schleswig-holstein": { name: "Schleswig-Holstein", cities: ["Kiel", "Lübeck", "Flensburg", "Neumünster", "Norderstedt"] },
        "thuringia": { name: "Thuringia", cities: ["Erfurt", "Jena", "Gera", "Weimar", "Gotha"] }
      }
    },
    "france": {
      name: "France",
      states: {
        "auvergne-rhone-alpes": { name: "Auvergne-Rhône-Alpes", cities: ["Lyon", "Grenoble", "Saint-Étienne", "Annecy", "Valence"] },
        "bourgogne-franche-comte": { name: "Bourgogne-Franche-Comté", cities: ["Dijon", "Besançon", "Chalon-sur-Saône", "Nevers", "Belfort"] },
        "bretagne": { name: "Bretagne", cities: ["Rennes", "Brest", "Quimper", "Lorient", "Vannes"] },
        "centre-val-de-loire": { name: "Centre-Val de Loire", cities: ["Orléans", "Tours", "Bourges", "Chartres", "Châteauroux"] },
        "corse": { name: "Corse", cities: ["Ajaccio", "Bastia", "Porto-Vecchio", "Calvi", "Corte"] },
        "grand-est": { name: "Grand Est", cities: ["Strasbourg", "Reims", "Metz", "Nancy", "Mulhouse"] },
        "hauts-de-france": { name: "Hauts-de-France", cities: ["Lille", "Amiens", "Roubaix", "Tourcoing", "Calais"] },
        "ile-de-france": { name: "Île-de-France", cities: ["Paris", "Boulogne-Billancourt", "Saint-Denis", "Argenteuil", "Montreuil"] },
        "normandie": { name: "Normandie", cities: ["Le Havre", "Rouen", "Caen", "Cherbourg-en-Cotentin", "Évreux"] },
        "nouvelle-aquitaine": { name: "Nouvelle-Aquitaine", cities: ["Bordeaux", "Limoges", "Poitiers", "Pau", "La Rochelle"] },
        "occitanie": { name: "Occitanie", cities: ["Toulouse", "Montpellier", "Nîmes", "Perpignan", "Béziers"] },
        "pays-de-la-loire": { name: "Pays de la Loire", cities: ["Nantes", "Le Mans", "Angers", "Saint-Nazaire", "Laval"] },
        "provence-alpes-cote-azur": { name: "Provence-Alpes-Côte d'Azur", cities: ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Antibes"] }
      }
    },
    "japan": {
      name: "Japan",
      states: {
        "hokkaido": { name: "Hokkaido", cities: ["Sapporo", "Asahikawa", "Hakodate", "Kushiro", "Obihiro"] },
        "aomori": { name: "Aomori", cities: ["Aomori", "Hirosaki", "Hachinohe", "Goshogawara", "Towada"] },
        "iwate": { name: "Iwate", cities: ["Morioka", "Ichinoseki", "Ōfunato", "Hanamaki", "Kitakami"] },
        "miyagi": { name: "Miyagi", cities: ["Sendai", "Ishinomaki", "Ōsaki", "Tome", "Iwanuma"] },
        "akita": { name: "Akita", cities: ["Akita", "Yokote", "Daisen", "Noshiro", "Yuzawa"] },
        "yamagata": { name: "Yamagata", cities: ["Yamagata", "Tsuruoka", "Sakata", "Shinjo", "Yonezawa"] },
        "fukushima": { name: "Fukushima", cities: ["Fukushima", "Iwaki", "Koriyama", "Aizuwakamatsu", "Sukagawa"] },
        "ibaraki": { name: "Ibaraki", cities: ["Mito", "Tsukuba", "Hitachi", "Tsuchiura", "Koga"] },
        "tochigi": { name: "Tochigi", cities: ["Utsunomiya", "Tochigi", "Ashikaga", "Sano", "Kanuma"] },
        "gunma": { name: "Gunma", cities: ["Maebashi", "Takasaki", "Ōta", "Isesaki", "Kiryu"] },
        "saitama": { name: "Saitama", cities: ["Saitama", "Kawaguchi", "Kawagoe", "Tokorozawa", "Koshigaya"] },
        "chiba": { name: "Chiba", cities: ["Chiba", "Funabashi", "Matsudo", "Ichikawa", "Kashiwa"] },
        "tokyo": { name: "Tokyo", cities: ["Shinjuku", "Shibuya", "Chiyoda", "Minato", "Toshima"] },
        "kanagawa": { name: "Kanagawa", cities: ["Yokohama", "Kawasaki", "Sagamihara", "Fujisawa", "Chigasaki"] },
        "niigata": { name: "Niigata", cities: ["Niigata", "Nagaoka", "Jōetsu", "Sanjō", "Kashiwazaki"] },
        "toyama": { name: "Toyama", cities: ["Toyama", "Takaoka", "Uozu", "Himi", "Namerikawa"] },
        "ishikawa": { name: "Ishikawa", cities: ["Kanazawa", "Hakusan", "Komatsu", "Wajima", "Suzu"] },
        "fukui": { name: "Fukui", cities: ["Fukui", "Tsuruga", "Obama", "Ōno", "Katsuyama"] },
        "yamanashi": { name: "Yamanashi", cities: ["Kōfu", "Fujiyoshida", "Tsuru", "Yamanashi", "Ōtsuki"] },
        "nagano": { name: "Nagano", cities: ["Nagano", "Matsumoto", "Ueda", "Iida", "Chino"] },
        "gifu": { name: "Gifu", cities: ["Gifu", "Ōgaki", "Takayama", "Tajimi", "Kakamigahara"] },
        "shizuoka": { name: "Shizuoka", cities: ["Shizuoka", "Hamamatsu", "Numazu", "Fuji", "Fujinomiya"] },
        "aichi": { name: "Aichi", cities: ["Nagoya", "Toyota", "Okazaki", "Ichinomiya", "Seto"] },
        "mie": { name: "Mie", cities: ["Tsu", "Yokkaichi", "Suzuka", "Matsusaka", "Kuwana"] },
        "shiga": { name: "Shiga", cities: ["Ōtsu", "Kusatsu", "Nagahama", "Higashiōmi", "Hikone"] },
        "kyoto": { name: "Kyoto", cities: ["Kyoto", "Uji", "Kameoka", "Joyo", "Nagaokakyo"] },
        "osaka": { name: "Osaka", cities: ["Osaka", "Sakai", "Higashiosaka", "Hirakata", "Toyonaka"] },
        "hyogo": { name: "Hyogo", cities: ["Kobe", "Himeji", "Nishinomiya", "Amagasaki", "Akashi"] },
        "nara": { name: "Nara", cities: ["Nara", "Kashihara", "Yamatotakada", "Yamatokoriyama", "Tenri"] },
        "wakayama": { name: "Wakayama", cities: ["Wakayama", "Tanabe", "Hashimoto", "Arida", "Gobo"] },
        "tottori": { name: "Tottori", cities: ["Tottori", "Yonago", "Kurayoshi", "Sakaiminato"] },
        "shimane": { name: "Shimane", cities: ["Matsue", "Hamada", "Izumo", "Masuda", "Ōda"] },
        "okayama": { name: "Okayama", cities: ["Okayama", "Kurashiki", "Tsuyama", "Tamano", "Kasaoka"] },
        "hiroshima": { name: "Hiroshima", cities: ["Hiroshima", "Fukuyama", "Kure", "Higashihiroshima", "Hatsukaichi"] },
        "yamaguchi": { name: "Yamaguchi", cities: ["Shimonoseki", "Ube", "Yamaguchi", "Iwakuni", "Tokuyama"] },
        "tokushima": { name: "Tokushima", cities: ["Tokushima", "Anan", "Naruto", "Yoshinogawa", "Awa"] },
        "kagawa": { name: "Kagawa", cities: ["Takamatsu", "Marugame", "Kan'onji", "Mitoyo", "Zentsuji"] },
        "ehime": { name: "Ehime", cities: ["Matsuyama", "Imabari", "Niihama", "Saijo", "Ōzu"] },
        "kochi": { name: "Kochi", cities: ["Kochi", "Nankoku", "Konan", "Susaki", "Tosa"] },
        "fukuoka": { name: "Fukuoka", cities: ["Fukuoka", "Kitakyushu", "Kurume", "Ōmuta", "Chikushino"] },
        "saga": { name: "Saga", cities: ["Saga", "Karatsu", "Tosu", "Imari", "Takeo"] },
        "nagasaki": { name: "Nagasaki", cities: ["Nagasaki", "Sasebo", "Isahaya", "Ōmura", "Hirado"] },
        "kumamoto": { name: "Kumamoto", cities: ["Kumamoto", "Yatsushiro", "Arao", "Tamana", "Hitoyoshi"] },
        "oita": { name: "Oita", cities: ["Ōita", "Beppu", "Nakatsu", "Hita", "Saiki"] },
        "miyazaki": { name: "Miyazaki", cities: ["Miyazaki", "Miyakonojo", "Nobeoka", "Nichinan", "Kobayashi"] },
        "kagoshima": { name: "Kagoshima", cities: ["Kagoshima", "Kanoya", "Kirishima", "Satsumasendai", "Soo"] },
        "okinawa": { name: "Okinawa", cities: ["Naha", "Okinawa", "Urasoe", "Ginowan", "Itoman"] }
      }
    },
    "brazil": {
      name: "Brazil",
      states: {
        "acre": { name: "Acre", cities: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó"] },
        "alagoas": { name: "Alagoas", cities: ["Maceió", "Arapiraca", "Palmeira dos Índios", "Rio Largo", "Penedo"] },
        "amapa": { name: "Amapá", cities: ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Mazagão"] },
        "amazonas": { name: "Amazonas", cities: ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari"] },
        "bahia": { name: "Bahia", cities: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Itabuna"] },
        "ceara": { name: "Ceará", cities: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral"] },
        "distrito-federal": { name: "Distrito Federal", cities: ["Brasília", "Gama", "Taguatinga", "Ceilândia", "Sobradinho"] },
        "espirito-santo": { name: "Espírito Santo", cities: ["Vila Velha", "Serra", "Cariacica", "Vitória", "Cachoeiro de Itapemirim"] },
        "goias": { name: "Goiás", cities: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia"] },
        "maranhao": { name: "Maranhão", cities: ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias"] },
        "mato-grosso": { name: "Mato Grosso", cities: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra"] },
        "mato-grosso-do-sul": { name: "Mato Grosso do Sul", cities: ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã"] },
        "minas-gerais": { name: "Minas Gerais", cities: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim"] },
        "para": { name: "Pará", cities: ["Belém", "Ananindeua", "Santarém", "Marabá", "Parauapebas"] },
        "paraiba": { name: "Paraíba", cities: ["João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux"] },
        "parana": { name: "Paraná", cities: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel"] },
        "pernambuco": { name: "Pernambuco", cities: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Banda de Caruaru", "Caruaru"] },
        "piaui": { name: "Piauí", cities: ["Teresina", "Parnaíba", "Picos", "Piripiri", "Floriano"] },
        "rio-de-janeiro": { name: "Rio de Janeiro", cities: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói"] },
        "rio-grande-do-norte": { name: "Rio Grande do Norte", cities: ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Macaíba"] },
        "rio-grande-do-sul": { name: "Rio Grande do Sul", cities: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria"] },
        "rondonia": { name: "Rondônia", cities: ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal"] },
        "roraima": { name: "Roraima", cities: ["Boa Vista", "Rorainópolis", "Caracaraí", "Alto Alegre", "Mucajaí"] },
        "santa-catarina": { name: "Santa Catarina", cities: ["Joinville", "Florianópolis", "Blumenau", "São José", "Criciúma"] },
        "sao-paulo": { name: "São Paulo", cities: ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "Santo André"] },
        "sergipe": { name: "Sergipe", cities: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana", "São Cristóvão"] },
        "tocantins": { name: "Tocantins", cities: ["Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins"] }
      }
    },
    "china": {
      name: "China",
      states: {
        "beijing": { name: "Beijing", cities: ["Beijing"] },
        "tianjin": { name: "Tianjin", cities: ["Tianjin"] },
        "hebei": { name: "Hebei", cities: ["Shijiazhuang", "Tangshan", "Qinhuangdao", "Handan", "Xingtai"] },
        "shanxi": { name: "Shanxi", cities: ["Taiyuan", "Datong", "Yangquan", "Changzhi", "Jincheng"] },
        "inner-mongolia": { name: "Inner Mongolia", cities: ["Hohhot", "Baotou", "Wuhai", "Chifeng", "Tongliao"] },
        "liaoning": { name: "Liaoning", cities: ["Shenyang", "Dalian", "Anshan", "Fushun", "Benxi"] },
        "jilin": { name: "Jilin", cities: ["Changchun", "Jilin", "Siping", "Liaoyuan", "Tonghua"] },
        "heilongjiang": { name: "Heilongjiang", cities: ["Harbin", "Qiqihar", "Jixi", "Hegang", "Shuangyashan"] },
        "shanghai": { name: "Shanghai", cities: ["Shanghai"] },
        "jiangsu": { name: "Jiangsu", cities: ["Nanjing", "Wuxi", "Xuzhou", "Changzhou", "Suzhou"] },
        "zhejiang": { name: "Zhejiang", cities: ["Hangzhou", "Ningbo", "Wenzhou", "Jiaxing", "Huzhou"] },
        "anhui": { name: "Anhui", cities: ["Hefei", "Wuhu", "Bengbu", "Huainan", "Ma'anshan"] },
        "fujian": { name: "Fujian", cities: ["Fuzhou", "Xiamen", "Putian", "Sanming", "Quanzhou"] },
        "jiangxi": { name: "Jiangxi", cities: ["Nanchang", "Jingdezhen", "Pingxiang", "Jiujiang", "Xinyu"] },
        "shandong": { name: "Shandong", cities: ["Jinan", "Qingdao", "Zibo", "Zaozhuang", "Dongying"] },
        "henan": { name: "Henan", cities: ["Zhengzhou", "Kaifeng", "Luoyang", "Pingdingshan", "Anyang"] },
        "hubei": { name: "Hubei", cities: ["Wuhan", "Huangshi", "Shiyan", "Yichang", "Xiangyang"] },
        "hunan": { name: "Hunan", cities: ["Changsha", "Zhuzhou", "Xiangtan", "Hengyang", "Shaoyang"] },
        "guangdong": { name: "Guangdong", cities: ["Guangzhou", "Shaoguan", "Shenzhen", "Zhuhai", "Shantou"] },
        "guangxi": { name: "Guangxi", cities: ["Nanning", "Liuzhou", "Guilin", "Wuzhou", "Beihai"] },
        "hainan": { name: "Hainan", cities: ["Haikou", "Sanya", "Sansha", "Danzhou"] },
        "chongqing": { name: "Chongqing", cities: ["Chongqing"] },
        "sichuan": { name: "Sichuan", cities: ["Chengdu", "Zigong", "Panzhihua", "Luzhou", "Deyang"] },
        "guizhou": { name: "Guizhou", cities: ["Guiyang", "Liupanshui", "Zunyi", "Anshun", "Bijie"] },
        "yunnan": { name: "Yunnan", cities: ["Kunming", "Qujing", "Yuxi", "Baoshan", "Zhaotong"] },
        "tibet": { name: "Tibet", cities: ["Lhasa", "Qamdo", "Shannan", "Shigatse", "Nagqu"] },
        "shaanxi": { name: "Shaanxi", cities: ["Xi'an", "Tongchuan", "Baoji", "Xianyang", "Weinan"] },
        "gansu": { name: "Gansu", cities: ["Lanzhou", "Jiayuguan", "Jinchang", "Baiyin", "Tianshui"] },
        "qinghai": { name: "Qinghai", cities: ["Xining", "Haidong", "Haibei", "Huangnan", "Hainan"] },
        "ningxia": { name: "Ningxia", cities: ["Yinchuan", "Shizuishan", "Wuzhong", "Guyuan", "Zhongwei"] },
        "xinjiang": { name: "Xinjiang", cities: ["Ürümqi", "Karamay", "Turpan", "Hami", "Changji"] }
      }
    },
    "russia": {
      name: "Russia",
      states: {
        "adygea": { name: "Adygea", cities: ["Maykop", "Adygeysk"] },
        "altai": { name: "Altai Republic", cities: ["Gorno-Altaysk"] },
        "bashkortostan": { name: "Bashkortostan", cities: ["Ufa", "Sterlitamak", "Salavat", "Neftekamsk", "Oktyabrsky"] },
        "buryatia": { name: "Buryatia", cities: ["Ulan-Ude", "Severobaykalsk", "Gusinoozersk", "Kyakhta"] },
        "chechnya": { name: "Chechnya", cities: ["Grozny", "Gudermes", "Argun", "Urus-Martan"] },
        "chuvashia": { name: "Chuvashia", cities: ["Cheboksary", "Novocheboksarsk", "Kanash", "Alatyr"] },
        "dagestan": { name: "Dagestan", cities: ["Makhachkala", "Derbent", "Kaspiysk", "Buynaksk", "Izberbash"] },
        "ingushetia": { name: "Ingushetia", cities: ["Magas", "Nazran", "Karabulak"] },
        "kabardino-balkaria": { name: "Kabardino-Balkaria", cities: ["Nalchik", "Prokhladny", "Baksan", "Maysky"] },
        "kalmykia": { name: "Kalmykia", cities: ["Elista", "Lagan", "Gorodovikovsk"] },
        "karachay-cherkessia": { name: "Karachay-Cherkessia", cities: ["Cherkessk", "Karachaevsk", "Ust-Dzheguta"] },
        "karelia": { name: "Karelia", cities: ["Petrozavodsk", "Kondopoga", "Segezha", "Sortavala"] },
        "khakassia": { name: "Khakassia", cities: ["Abakan", "Chernogorsk", "Sayanogorsk", "Sorsk"] },
        "komi": { name: "Komi Republic", cities: ["Syktyvkar", "Ukhta", "Vorkuta", "Pechora"] },
        "mari-el": { name: "Mari El", cities: ["Yoshkar-Ola", "Volzhsk", "Kozmodemyansk"] },
        "mordovia": { name: "Mordovia", cities: ["Saransk", "Ruzayevka", "Kovylkino", "Krasnoslobodsk"] },
        "north-ossetia": { name: "North Ossetia-Alania", cities: ["Vladikavkaz", "Beslan", "Mozdok", "Alagir"] },
        "sakha": { name: "Sakha Republic", cities: ["Yakutsk", "Mirny", "Neryungri", "Lensk"] },
        "tatarstan": { name: "Tatarstan", cities: ["Kazan", "Naberezhnye Chelny", "Nizhnekamsk", "Almetyevsk"] },
        "tuva": { name: "Tuva", cities: ["Kyzyl", "Ak-Dovurak", "Shagonar"] },
        "udmurtia": { name: "Udmurtia", cities: ["Izhevsk", "Sarapul", "Votkinsk", "Glazov"] },
        "altai-krai": { name: "Altai Krai", cities: ["Barnaul", "Biysk", "Rubtsovsk", "Novoaltaysk"] },
        "kamchatka": { name: "Kamchatka Krai", cities: ["Petropavlovsk-Kamchatsky", "Yelizovo", "Vilyuchinsk"] },
        "khabarovsk": { name: "Khabarovsk Krai", cities: ["Khabarovsk", "Komsomolsk-on-Amur", "Amursk", "Sovetskaya Gavan"] },
        "krasnodar": { name: "Krasnodar Krai", cities: ["Krasnodar", "Sochi", "Novorossiysk", "Armavir"] },
        "krasnoyarsk": { name: "Krasnoyarsk Krai", cities: ["Krasnoyarsk", "Norilsk", "Achinsk", "Kansk"] },
        "perm": { name: "Perm Krai", cities: ["Perm", "Berezniki", "Solikamsk", "Chaykovsky"] },
        "primorsky": { name: "Primorsky Krai", cities: ["Vladivostok", "Nakhodka", "Ussuriysk", "Artyom"] },
        "stavropol": { name: "Stavropol Krai", cities: ["Stavropol", "Pyatigorsk", "Kislovodsk", "Nevinnomyssk"] },
        "zabaykalsky": { name: "Zabaykalsky Krai", cities: ["Chita", "Krasnokamensk", "Borzya", "Petrovsk-Zabaykalsky"] },
        "amur": { name: "Amur Oblast", cities: ["Blagoveshchensk", "Belogorsk", "Svobodny", "Tynda"] },
        "arkhangelsk": { name: "Arkhangelsk Oblast", cities: ["Arkhangelsk", "Severodvinsk", "Kotlas", "Novodvinsk"] },
        "astrakhan": { name: "Astrakhan Oblast", cities: ["Astrakhan", "Akhtubinsk", "Znamensk", "Kamyzyak"] },
        "belgorod": { name: "Belgorod Oblast", cities: ["Belgorod", "Stary Oskol", "Gubkin", "Shebekino"] },
        "bryansk": { name: "Bryansk Oblast", cities: ["Bryansk", "Klintsy", "Novozybkov", "Dyatkovo"] },
        "chelyabinsk": { name: "Chelyabinsk Oblast", cities: ["Chelyabinsk", "Magnitogorsk", "Zlatoust", "Miass"] },
        "irkutsk": { name: "Irkutsk Oblast", cities: ["Irkutsk", "Angarsk", "Bratsk", "Ust-Ilimsk"] },
        "ivanovo": { name: "Ivanovo Oblast", cities: ["Ivanovo", "Kineshma", "Shuya", "Furmanov"] },
        "kaliningrad": { name: "Kaliningrad Oblast", cities: ["Kaliningrad", "Sovetsk", "Chernyakhovsk", "Baltiysk"] },
        "kaluga": { name: "Kaluga Oblast", cities: ["Kaluga", "Obninsk", "Maloyaroslavets", "Lyudinovo"] },
        "kemerovo": { name: "Kemerovo Oblast", cities: ["Kemerovo", "Novokuznetsk", "Prokopyevsk", "Leninsk-Kuznetsky"] },
        "kirov": { name: "Kirov Oblast", cities: ["Kirov", "Vyatskiye Polyany", "Slobodskoy", "Kotelnich"] },
        "kostroma": { name: "Kostroma Oblast", cities: ["Kostroma", "Buy", "Galich", "Nerekhta"] },
        "kurgan": { name: "Kurgan Oblast", cities: ["Kurgan", "Shadrinsk", "Kataysk", "Dalmatovo"] },
        "kursk": { name: "Kursk Oblast", cities: ["Kursk", "Zheleznogorsk", "Lgov", "Shchigry"] },
        "leningrad": { name: "Leningrad Oblast", cities: ["Gatchina", "Vyborg", "Sosnovy Bor", "Tikhvin"] },
        "lipetsk": { name: "Lipetsk Oblast", cities: ["Lipetsk", "Yelets", "Gryazi", "Lebedyan"] },
        "magadan": { name: "Magadan Oblast", cities: ["Magadan", "Susuman", "Ola", "Sokol"] },
        "moscow": { name: "Moscow Oblast", cities: ["Balashikha", "Khimki", "Podolsk", "Korolev"] },
        "murmansk": { name: "Murmansk Oblast", cities: ["Murmansk", "Apatity", "Severomorsk", "Monchegorsk"] },
        "nizhny-novgorod": { name: "Nizhny Novgorod Oblast", cities: ["Nizhny Novgorod", "Dzerzhinsk", "Bor", "Arzamas"] },
        "novgorod": { name: "Novgorod Oblast", cities: ["Veliky Novgorod", "Borovichi", "Staraya Russa", "Valdai"] },
        "novosibirsk": { name: "Novosibirsk Oblast", cities: ["Novosibirsk", "Berdsk", "Iskitim", "Ob"] },
        "omsk": { name: "Omsk Oblast", cities: ["Omsk", "Tara", "Kalachinsk", "Issilkul"] },
        "orenburg": { name: "Orenburg Oblast", cities: ["Orenburg", "Orsk", "Novotroitsk", "Buzuluk"] },
        "oryol": { name: "Oryol Oblast", cities: ["Oryol", "Livny", "Mtsensk", "Bolkhov"] },
        "penza": { name: "Penza Oblast", cities: ["Penza", "Kuznetsk", "Serdobsk", "Zarechny"] },
        "pskov": { name: "Pskov Oblast", cities: ["Pskov", "Velikiye Luki", "Ostrov", "Nevel"] },
        "rostov": { name: "Rostov Oblast", cities: ["Rostov-on-Don", "Taganrog", "Shakhty", "Novocherkassk"] },
        "ryazan": { name: "Ryazan Oblast", cities: ["Ryazan", "Kasimov", "Skopin", "Sasovo"] },
        "sakhalin": { name: "Sakhalin Oblast", cities: ["Yuzhno-Sakhalinsk", "Korsakov", "Kholmsk", "Okha"] },
        "samara": { name: "Samara Oblast", cities: ["Samara", "Tolyatti", "Syzran", "Novokuybyshevsk"] },
        "saratov": { name: "Saratov Oblast", cities: ["Saratov", "Balakovo", "Engels", "Volsk"] },
        "smolensk": { name: "Smolensk Oblast", cities: ["Smolensk", "Vyazma", "Roslavl", "Safonovo"] },
        "sverdlovsk": { name: "Sverdlovsk Oblast", cities: ["Yekaterinburg", "Nizhny Tagil", "Kamensk-Uralsky", "Pervouralsk"] },
        "tambov": { name: "Tambov Oblast", cities: ["Tambov", "Michurinsk", "Morshansk", "Rasskazovo"] },
        "tomsk": { name: "Tomsk Oblast", cities: ["Tomsk", "Seversk", "Strezhevoy", "Kolpashevo"] },
        "tula": { name: "Tula Oblast", cities: ["Tula", "Novomoskovsk", "Aleksin", "Shchyokino"] },
        "tver": { name: "Tver Oblast", cities: ["Tver", "Rzhev", "Kimry", "Vyshny Volochyok"] },
        "tyumen": { name: "Tyumen Oblast", cities: ["Tyumen", "Surgut", "Nizhnevartovsk", "Noyabrsk"] },
        "ulyanovsk": { name: "Ulyanovsk Oblast", cities: ["Ulyanovsk", "Dimitrovgrad", "Inza", "Barysh"] },
        "vladimir": { name: "Vladimir Oblast", cities: ["Vladimir", "Kovrov", "Murom", "Alexandrov"] },
        "volgograd": { name: "Volgograd Oblast", cities: ["Volgograd", "Volzhsky", "Kamyshin", "Uryupinsk"] },
        "vologda": { name: "Vologda Oblast", cities: ["Vologda", "Cherepovets", "Sokol", "Velikiy Ustyug"] },
        "voronezh": { name: "Voronezh Oblast", cities: ["Voronezh", "Borisoglebsk", "Rossosh", "Liski"] },
        "yaroslavl": { name: "Yaroslavl Oblast", cities: ["Yaroslavl", "Rybinsk", "Tutayev", "Pereslavl-Zalessky"] },
        "moscow-city": { name: "Moscow", cities: ["Moscow"] },
        "saint-petersburg": { name: "Saint Petersburg", cities: ["Saint Petersburg"] },
        "jewish-autonomous": { name: "Jewish Autonomous Oblast", cities: ["Birobidzhan", "Obluchye"] },
        "chukotka": { name: "Chukotka Autonomous Okrug", cities: ["Anadyr", "Bilibino", "Pevek"] },
        "khanty-mansi": { name: "Khanty-Mansi Autonomous Okrug", cities: ["Khanty-Mansiysk", "Surgut", "Nizhnevartovsk"] },
        "nenets": { name: "Nenets Autonomous Okrug", cities: ["Naryan-Mar", "Amderma"] },
        "yamalo-nenets": { name: "Yamalo-Nenets Autonomous Okrug", cities: ["Salekhard", "Novy Urengoy", "Noyabrsk"] }
      }
    },
    "mexico": {
      name: "Mexico",
      states: {
        "aguascalientes": { name: "Aguascalientes", cities: ["Aguascalientes", "Jesús María", "Calvillo", "Rincón de Romos"] },
        "baja-california": { name: "Baja California", cities: ["Tijuana", "Mexicali", "Ensenada", "Rosarito", "Tecate"] },
        "baja-california-sur": { name: "Baja California Sur", cities: ["La Paz", "Los Cabos", "Comondú", "Mulegé", "Loreto"] },
        "campeche": { name: "Campeche", cities: ["Campeche", "Carmen", "Champotón", "Escárcega", "Calkiní"] },
        "chiapas": { name: "Chiapas", cities: ["Tuxtla Gutiérrez", "Tapachula", "San Cristóbal de las Casas", "Comitán", "Palenque"] },
        "chihuahua": { name: "Chihuahua", cities: ["Ciudad Juárez", "Chihuahua", "Delicias", "Cuauhtémoc", "Parral"] },
        "coahuila": { name: "Coahuila", cities: ["Saltillo", "Torreón", "Monclova", "Piedras Negras", "Acuña"] },
        "colima": { name: "Colima", cities: ["Colima", "Manzanillo", "Tecomán", "Villa de Álvarez", "Armería"] },
        "durango": { name: "Durango", cities: ["Durango", "Gómez Palacio", "Lerdo", "Santiago Papasquiaro", "Guadalupe Victoria"] },
        "guanajuato": { name: "Guanajuato", cities: ["León", "Irapuato", "Celaya", "Salamanca", "Guanajuato"] },
        "guerrero": { name: "Guerrero", cities: ["Acapulco", "Chilpancingo", "Iguala", "Taxco", "Zihuatanejo"] },
        "hidalgo": { name: "Hidalgo", cities: ["Pachuca", "Tulancingo", "Huejutla", "Ixmiquilpan", "Tizayuca"] },
        "jalisco": { name: "Jalisco", cities: ["Guadalajara", "Zapopan", "Tlaquepaque", "Tonalá", "Puerto Vallarta"] },
        "mexico": { name: "Estado de México", cities: ["Ecatepec", "Nezahualcóyotl", "Naucalpan", "Tlalnepantla", "Chimalhuacán"] },
        "michoacan": { name: "Michoacán", cities: ["Morelia", "Uruapan", "Zamora", "Lázaro Cárdenas", "Apatzingán"] },
        "morelos": { name: "Morelos", cities: ["Cuernavaca", "Jiutepec", "Cuautla", "Temixco", "Yautepec"] },
        "nayarit": { name: "Nayarit", cities: ["Tepic", "Bahía de Banderas", "Santiago Ixcuintla", "Compostela", "Ixtlán del Río"] },
        "nuevo-leon": { name: "Nuevo León", cities: ["Monterrey", "Guadalupe", "San Nicolás de los Garza", "Apodaca", "General Escobedo"] },
        "oaxaca": { name: "Oaxaca", cities: ["Oaxaca de Juárez", "Salina Cruz", "Juchitán", "Tuxtepec", "Huajuapan"] },
        "puebla": { name: "Puebla", cities: ["Puebla", "Tehuacán", "San Martín Texmelucan", "Atlixco", "San Pedro Cholula"] },
        "queretaro": { name: "Querétaro", cities: ["Querétaro", "San Juan del Río", "Corregidora", "El Marqués", "Tequisquiapan"] },
        "quintana-roo": { name: "Quintana Roo", cities: ["Cancún", "Chetumal", "Playa del Carmen", "Cozumel", "Tulum"] },
        "san-luis-potosi": { name: "San Luis Potosí", cities: ["San Luis Potosí", "Soledad de Graciano Sánchez", "Ciudad Valles", "Matehuala", "Rioverde"] },
        "sinaloa": { name: "Sinaloa", cities: ["Culiacán", "Mazatlán", "Los Mochis", "Guasave", "Guamúchil"] },
        "sonora": { name: "Sonora", cities: ["Hermosillo", "Ciudad Obregón", "Nogales", "San Luis Río Colorado", "Navojoa"] },
        "tabasco": { name: "Tabasco", cities: ["Villahermosa", "Cárdenas", "Comalcalco", "Paraíso", "Cunduacán"] },
        "tamaulipas": { name: "Tamaulipas", cities: ["Reynosa", "Matamoros", "Nuevo Laredo", "Tampico", "Victoria"] },
        "tlaxcala": { name: "Tlaxcala", cities: ["Tlaxcala", "Huamantla", "Apizaco", "Chiautempan", "Zacatelco"] },
        "veracruz": { name: "Veracruz", cities: ["Veracruz", "Xalapa", "Coatzacoalcos", "Poza Rica", "Orizaba"] },
        "yucatan": { name: "Yucatán", cities: ["Mérida", "Kanasín", "Umán", "Progreso", "Valladolid"] },
        "zacatecas": { name: "Zacatecas", cities: ["Zacatecas", "Fresnillo", "Guadalupe", "Jerez", "Río Grande"] },
        "mexico-city": { name: "Mexico City", cities: ["Mexico City"] }
      }
    },
    "italy": {
      name: "Italy",
      states: {
        "abruzzo": { name: "Abruzzo", cities: ["L'Aquila", "Pescara", "Chieti", "Teramo", "Avezzano"] },
        "basilicata": { name: "Basilicata", cities: ["Potenza", "Matera", "Melfi", "Lavello", "Venosa"] },
        "calabria": { name: "Calabria", cities: ["Catanzaro", "Reggio Calabria", "Cosenza", "Crotone", "Vibo Valentia"] },
        "campania": { name: "Campania", cities: ["Naples", "Salerno", "Caserta", "Benevento", "Avellino"] },
        "emilia-romagna": { name: "Emilia-Romagna", cities: ["Bologna", "Modena", "Parma", "Reggio Emilia", "Ravenna"] },
        "friuli-venezia-giulia": { name: "Friuli-Venezia Giulia", cities: ["Trieste", "Udine", "Pordenone", "Gorizia"] },
        "lazio": { name: "Lazio", cities: ["Rome", "Latina", "Frosinone", "Rieti", "Viterbo"] },
        "liguria": { name: "Liguria", cities: ["Genoa", "La Spezia", "Savona", "Imperia", "Sanremo"] },
        "lombardy": { name: "Lombardy", cities: ["Milan", "Bergamo", "Brescia", "Como", "Cremona"] },
        "marche": { name: "Marche", cities: ["Ancona", "Pesaro", "Macerata", "Ascoli Piceno", "Fermo"] },
        "molise": { name: "Molise", cities: ["Campobasso", "Isernia", "Termoli", "Venafro"] },
        "piedmont": { name: "Piedmont", cities: ["Turin", "Alessandria", "Asti", "Biella", "Cuneo"] },
        "puglia": { name: "Puglia", cities: ["Bari", "Lecce", "Taranto", "Foggia", "Brindisi"] },
        "sardinia": { name: "Sardinia", cities: ["Cagliari", "Sassari", "Quartu Sant'Elena", "Olbia", "Alghero"] },
        "sicily": { name: "Sicily", cities: ["Palermo", "Catania", "Messina", "Syracuse", "Trapani"] },
        "trentino-alto-adige": { name: "Trentino-Alto Adige", cities: ["Trento", "Bolzano", "Merano", "Rovereto"] },
        "tuscany": { name: "Tuscany", cities: ["Florence", "Pisa", "Livorno", "Arezzo", "Siena"] },
        "umbria": { name: "Umbria", cities: ["Perugia", "Terni", "Foligno", "Città di Castello", "Spoleto"] },
        "valle-d-aosta": { name: "Valle d'Aosta", cities: ["Aosta", "Châtillon", "Verrès", "Morgex"] },
        "veneto": { name: "Veneto", cities: ["Venice", "Verona", "Padua", "Vicenza", "Treviso"] }
      }
    },
    "spain": {
      name: "Spain",
      states: {
        "andalusia": { name: "Andalusia", cities: ["Seville", "Málaga", "Córdoba", "Granada", "Almería"] },
        "aragon": { name: "Aragon", cities: ["Zaragoza", "Huesca", "Teruel", "Calatayud", "Alcañiz"] },
        "asturias": { name: "Asturias", cities: ["Oviedo", "Gijón", "Avilés", "Langreo", "Mieres"] },
        "balearic-islands": { name: "Balearic Islands", cities: ["Palma", "Ibiza", "Mahón", "Inca", "Manacor"] },
        "basque-country": { name: "Basque Country", cities: ["Bilbao", "Vitoria-Gasteiz", "San Sebastián", "Getxo", "Barakaldo"] },
        "canary-islands": { name: "Canary Islands", cities: ["Las Palmas", "Santa Cruz de Tenerife", "La Laguna", "Telde", "Arona"] },
        "cantabria": { name: "Cantabria", cities: ["Santander", "Torrelavega", "Castro-Urdiales", "Camargo", "El Astillero"] },
        "castile-and-leon": { name: "Castile and León", cities: ["Valladolid", "Burgos", "Salamanca", "León", "Palencia"] },
        "castile-la-mancha": { name: "Castile-La Mancha", cities: ["Albacete", "Toledo", "Guadalajara", "Ciudad Real", "Cuenca"] },
        "catalonia": { name: "Catalonia", cities: ["Barcelona", "Hospitalet de Llobregat", "Badalona", "Terrassa", "Sabadell"] },
        "extremadura": { name: "Extremadura", cities: ["Badajoz", "Cáceres", "Mérida", "Plasencia", "Don Benito"] },
        "galicia": { name: "Galicia", cities: ["Vigo", "A Coruña", "Ourense", "Lugo", "Santiago de Compostela"] },
        "la-rioja": { name: "La Rioja", cities: ["Logroño", "Calahorra", "Arnedo", "Haro", "Santo Domingo de la Calzada"] },
        "madrid": { name: "Madrid", cities: ["Madrid", "Móstoles", "Alcalá de Henares", "Fuenlabrada", "Leganés"] },
        "murcia": { name: "Murcia", cities: ["Murcia", "Cartagena", "Lorca", "Molina de Segura", "Alcantarilla"] },
        "navarre": { name: "Navarre", cities: ["Pamplona", "Tudela", "Barañáin", "Burlada", "Estella-Lizarra"] },
        "valencia": { name: "Valencia", cities: ["Valencia", "Alicante", "Elche", "Castellón de la Plana", "Torrevieja"] },
        "ceuta": { name: "Ceuta", cities: ["Ceuta"] },
        "melilla": { name: "Melilla", cities: ["Melilla"] }
      }
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSelectValueChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    
    // Reset dependent dropdowns when country changes
    if (name === 'country') {
      setFormData(prev => ({ ...prev, [name]: value, state: "", city: "" }));
    }
    // Reset city when state changes
    if (name === 'state') {
      setFormData(prev => ({ ...prev, [name]: value, city: "" }));
    }
  };
  
  const handleRadioChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    if (name.startsWith('section-')) {
      const sectionName = name.replace('section-', '') as keyof typeof formData.sections;
      setFormData({
        ...formData,
        sections: {
          ...formData.sections,
          [sectionName]: checked
        }
      });
    } else {
      setFormData({ ...formData, [name]: checked });
    }
  };

  const handleDeleteSupporter = (supporterId: string) => {
    setSupporters(supporters.filter(supporter => supporter.id !== supporterId));
  };

  const handleEditSupporter = (supporterId: string) => {
    setEditingSupporterId(supporterId);
  };

  const handleSaveSupporter = (supporterId: string, newName: string, newRelationship: string) => {
    setSupporters(supporters.map(supporter => 
      supporter.id === supporterId 
        ? { ...supporter, name: newName, relationship: newRelationship }
        : supporter
    ));
    setEditingSupporterId(null);
  };
  
  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep(step + 1);
  };
  
  const prevStep = () => {
    window.scrollTo(0, 0);
    setStep(step - 1);
  };
  
  const finalSubmit = () => {
    console.log("Form submitted with data:", formData);
    navigate("/map");
  };
  
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="space-y-4 text-center">
              <h2 className="text-2xl font-bold">Welcome to TummyTales</h2>
              <p className="text-muted-foreground">
                Let's personalize your pregnancy journey. We'll ask you a few questions to get started.
                You can update this information later in your profile settings.
              </p>
              <Button onClick={nextStep} className="mt-4">Get Started</Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>

            {/* General Details Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">General Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Gender</Label>
                  <RadioGroup
                    value={formData.gender}
                    onValueChange={(value) =>
                      handleRadioChange("gender", value)
                    }
                    className="flex flex-row space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ethnicity">Ethnicity</Label>
                  <Select
                    value={formData.ethnicity}
                    onValueChange={(value) =>
                      handleSelectValueChange("ethnicity", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select ethnicity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asian">Asian</SelectItem>
                      <SelectItem value="black">
                        Black or African American
                      </SelectItem>
                      <SelectItem value="hispanic">
                        Hispanic or Latino
                      </SelectItem>
                      <SelectItem value="native-american">
                        Native American
                      </SelectItem>
                      <SelectItem value="pacific-islander">
                        Pacific Islander
                      </SelectItem>
                      <SelectItem value="white">White</SelectItem>
                      <SelectItem value="mixed">Mixed Race</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">
                        Prefer not to say
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select
                    value={formData.country}
                    onValueChange={(value) =>
                      handleSelectValueChange("country", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(countryStateData).map(
                        ([key, country]) => (
                          <SelectItem key={key} value={key}>
                            {country.name}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </div>

                {formData.country && (
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select
                      value={formData.state}
                      onValueChange={(value) =>
                        handleSelectValueChange("state", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(
                          countryStateData[
                            formData.country as keyof typeof countryStateData
                          ]?.states || {}
                        ).map(([key, state]) => (
                          <SelectItem key={key} value={key}>
                            {state.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {formData.state && (
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Select
                      value={formData.city}
                      onValueChange={(value) =>
                        handleSelectValueChange("city", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        {/* ✅ Use simplified & readable access with optional chaining */}
                        {countryStateData[formData.country]?.states[
                          formData.state
                        ]?.cities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="addressLine1">Address Line 1</Label>
                  <Input
                    id="addressLine1"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="addressLine2">
                    Address Line 2 (Optional)
                  </Label>
                  <Input
                    id="addressLine2"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="zipcode">Zipcode</Label>
                  <Input
                    id="zipcode"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <Button onClick={prevStep} variant="outline">
                Back
              </Button>
              <div>
                <Button onClick={nextStep} variant="outline" className="mr-2">
                  Skip
                </Button>
                <Button onClick={nextStep}>Continue</Button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Pregnancy Status</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Are you currently pregnant or planning on becoming pregnant?</Label>
                <RadioGroup 
                  value={formData.isPregnant} 
                  onValueChange={(value) => handleRadioChange('isPregnant', value)}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes-pregnant" />
                    <Label htmlFor="yes-pregnant">Yes, I am currently pregnant</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="planning" id="planning-pregnant" />
                    <Label htmlFor="planning-pregnant">I am planning to get pregnant</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no-pregnant" />
                    <Label htmlFor="no-pregnant">No</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastPeriod">When was the first day of your last menstrual period?</Label>
                <Input
                  id="lastPeriod"
                  name="lastPeriod"
                  type="date"
                  value={formData.lastPeriod}
                  onChange={handleChange}
                  className="w-full md:w-[240px]"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dueDate">If established, what is your estimated due date?</Label>
                <Input
                  id="dueDate"
                  name="dueDate"
                  type="date"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="w-full md:w-[240px]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Have you ever experienced any pregnancy loss?
                </label>
                <select
                  name="PregnancyLoss"
                  value={formData.PregnancyLoss ? "Yes" : "No"}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      PregnancyLoss: e.target.value === "Yes",
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              {formData.PregnancyLoss && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 p-4 bg-white/50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      When was your last pregnancy loss?
                    </label>
                    <input
                      type="date"
                      name="dateOfLoss"
                      value={formData.dateOfLoss}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What was the reason given for the loss?
                    </label>
                    <select
                      name="reason"
                      value={formData.reason}
                      onChange={handleSelectChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="Chemical Pregnancy">Chemical Pregnancy</option>
                      <option value="Blighted Ovum">Blighted Ovum</option>
                      <option value="No Heartbeat">No Heartbeat</option>
                      <option value="Size Didn't Match Dates">Size Didn't Match Dates</option>
                      <option value="Abortion">Abortion</option>
                      <option value="None of the Following">None of the Following</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      How many weeks was the fetus at the time of the loss?
                    </label>
                    <input
                      type="number"
                      name="gestationWeeks"
                      value={formData.gestationWeeks}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Where did you get treated?
                    </label>
                    <input
                      type="text"
                      name="treatmentLocation"
                      placeholder="City, State, Country"
                      value={formData.treatmentLocation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Would this be your first child?
                  </label>
                  <select
                    name="firstChild"
                    value={formData.firstChild ? "No" : "Yes"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        firstChild: e.target.value === "No",
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              {formData.firstChild && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 p-4 bg-white/50 rounded-lg">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What is the date of birth of your first child?
                    </label>
                    <input
                      type="date"
                      name="firstChildDob"
                      value={formData.firstChildDob}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Were there any complications?
                    </label>
                    <textarea
                      name="complications"
                      value={formData.complications}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What kind of delivery method was used?
                    </label>
                    <select
                      name="deliverymethod"
                      value={formData.deliverymethod}
                      onChange={handleSelectChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select an option</option>
                      <option value="Normal">Normal</option>
                      <option value="C-section">C-section</option>
                      <option value="Forceps/Vacuum">Forceps/Vacuum</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Where was your child born?
                    </label>
                    <input
                      type="text"
                      name="childbornlocation"
                      placeholder="City, State, Country"
                      value={formData.childbornlocation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      What was the baby's gestational age at birth?
                    </label>
                    <input
                      type="text"
                      name="gestationalAgeAtBirth"
                      placeholder="Weeks and Days"
                      value={formData.gestationalAgeAtBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-between mt-6">
              <Button onClick={prevStep} variant="outline">
                Back
              </Button>
              <div>
                <Button onClick={nextStep} variant="outline" className="mr-2">
                  Skip
                </Button>
                <Button onClick={nextStep}>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Health & Healthcare Information</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Do you have a primary care physician?</Label>
                <Select value={formData.hasPCP} onValueChange={(value) => handleSelectValueChange('hasPCP', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

          {formData.hasPCP === "yes" && (
                <div className="grid grid-cols-1 gap-6 mt-4 p-4 bg-white/50 rounded-lg">
                  {/* ✅ Doctor Name Section */}
                  <div>
                    <div className="mb-2 font-semibold">Name of Doctor</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          name="primaryFirst_name"
                          placeholder="First Name"
                          value={formData.primaryFirst_name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="primaryLast_name"
                          placeholder="Last Name"
                          value={formData.primaryLast_name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ✅ Country & Address Line 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Country
                      </label>
                      <select
                        name="primaryCountry"
                        value={formData.primaryCountry}
                        onChange={handleSelectChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Select Country</option>
                        <option value="United States">United States</option>
                        <option value="India">India</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        name="primaryAddressline1"
                        placeholder="Address Line 1 (required)"
                        value={formData.primaryAddressline1}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* ✅ Address Line 2 & City */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        name="primaryAddressline2"
                        placeholder="Address Line 2"
                        value={formData.primaryAddressline2}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="primaryCity"
                        placeholder="City (required)"
                        value={formData.primaryCity}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* ✅ State & ZIP Code */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        name="primaryState"
                        placeholder="State (required)"
                        value={formData.primaryState}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="primaryZip_code"
                        placeholder="ZIP Code (required)"
                        value={formData.primaryZip_code}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* ✅ Phone Number (Full width) */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="primaryPhonenumber"
                      placeholder="Phone Number of Doctor"
                      value={formData.primaryPhonenumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}
              <div className="space-y-2">
                <Label>Do you have an OB/GYN?</Label>
                <Select value={formData.hasOBGYN} onValueChange={(value) => handleSelectValueChange('hasOBGYN', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.hasOBGYN === "yes" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 p-4 bg-white/50 rounded-lg">
                     {/* Name of Doctor section */}
                  <div className="col-span-2">
                    <div className="mb-4 font-semibold">Name of Doctor</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <input
                          type="text"
                          name="obgynFirst_name"
                          placeholder="First Name"
                          value={formData.obgynFirst_name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="obgynLast_name"
                          placeholder="Last Name"
                          value={formData.obgynLast_name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Country
                    </label>
                    <select
                      name="obgynCountry"
                      value={formData.obgynCountry}
                      onChange={handleSelectChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select Country</option>
                      <option value="United States">United States</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Address Line 1
                    </label>
                    <input
                      type="text"
                      name="obgynAddressline1"
                      placeholder="Address Line 1 (required)"
                      value={formData.obgynAddressline1}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      name="obgynAddressline2"
                      placeholder="Address Line 2"
                      value={formData.obgynAddressline2}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="obgynCity"
                      placeholder="City (required)"
                      value={formData.obgynCity}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="obgynState"
                      placeholder="State (required)"
                      value={formData.obgynState}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="obgynZip_code"
                      placeholder="ZIP Code (required)"
                      value={formData.obgynZip_code}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="obgynPhonenumber"
                      placeholder="Phone Number of Doctor"
                      value={formData.obgynPhonenumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="insuranceProvider">Insurance provider</Label>
                <Input
                  id="insuranceProvider"
                  name="insuranceProvider"
                  value={formData.insuranceProvider}
                  onChange={handleChange}
                />
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">
                  Are you currently on any medications?
                </label>

                <div className="flex gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setShowMedication1(true)}
                    disabled={showMedication1}
                    className={`px-4 py-2 rounded-md font-medium ${
                      showMedication1
                        ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                        : "bg-gray-800 text-white"
                    }`}
                  >
                    Add Medication 1
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowMedication2(true)}
                    disabled={showMedication2}
                    className={`px-4 py-2 rounded-md font-medium ${
                      showMedication2
                        ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                        : "bg-black text-white"
                    }`}
                  >
                    Add Medication 2
                  </button>
                </div>

                {/* Medication 1 Section */}
                {showMedication1 && (
                  <div className="border border-gray-200 p-4 rounded-md mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold">Medication 1</h3>
                      <button
                        onClick={() => setShowMedication1(false)}
                        className="text-red-600 hover:text-red-800"
                        title="Remove Medication 1"
                      >
                        🗑️
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="medication1Name"
                          value={formData.medication1Name}
                          onChange={handleChange}
                          placeholder="Medication Name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Dosage
                        </label>
                        <input
                          type="text"
                          name="medication1Dosage"
                          value={formData.medication1Dosage}
                          onChange={handleChange}
                          placeholder="Dosage"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Frequency
                        </label>
                        <input
                          type="text"
                          name="medication1Frequency"
                          value={formData.medication1Frequency}
                          onChange={handleChange}
                          placeholder="Frequency"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Medication 2 Section */}
                {showMedication2 && (
                  <div className="border border-gray-200 p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-semibold">Medication 2</h3>
                      <button
                        onClick={() => setShowMedication2(false)}
                        className="text-red-600 hover:text-red-800"
                        title="Remove Medication 2"
                      >
                        🗑️
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          name="medication2Name"
                          value={formData.medication2Name}
                          onChange={handleChange}
                          placeholder="Medication Name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Dosage
                        </label>
                        <input
                          type="text"
                          name="medication2Dosage"
                          value={formData.medication2Dosage}
                          onChange={handleChange}
                          placeholder="Dosage"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Frequency
                        </label>
                        <input
                          type="text"
                          name="medication2Frequency"
                          value={formData.medication2Frequency}
                          onChange={handleChange}
                          placeholder="Frequency"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label>Do you smoke or drink alcohol?</Label>
                <Select value={formData.alcoholSmoking} onValueChange={(value) => handleSelectValueChange('alcoholSmoking', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="neither">Neither smoke nor drink</SelectItem>
                    <SelectItem value="smoke">I smoke</SelectItem>
                    <SelectItem value="drink">I drink alcohol</SelectItem>
                    <SelectItem value="both">I do both</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button onClick={prevStep} variant="outline">
                Back
              </Button>
              <div>
                <Button onClick={nextStep} variant="outline" className="mr-2">
                  Skip
                </Button>
                <Button onClick={nextStep}>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg mt-8">
              <h2 className="text-xl font-semibold">
                Lifestyle & Preferences
              </h2>
              <p className="text-gray-600 mt-1">
                Help us understand your personal preferences and lifestyle.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    What is your preferred language for medical advice and resources?
                  </label>
                  <input
                    type="text"
                    name="preferredLanguage"
                    value={formData.preferredLanguage}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Do you have any dietary restrictions or food allergies?
                  </label>
                  <input
                    type="text"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Do you currently exercise or engage in physical activity during pregnancy?
                  </label>
                  <input
                    type="text"
                    name="exerciseFrequency"
                    value={formData.exerciseFrequency}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    How would you describe your support system during pregnancy?
                  </label>
                  <input
                    type="text"
                    name="supportSystem"
                    value={formData.supportSystem}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button onClick={prevStep} variant="outline">
                Back
              </Button>
              <div>
                <Button onClick={nextStep} variant="outline" className="mr-2">
                  Skip
                </Button>
                <Button onClick={nextStep}>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg mt-8">
              <h2 className="text-xl font-semibold">Support System</h2>
              <p className="text-gray-600 mt-1">
                We'd like to hear about your expectations and any concerns you may
                have.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    What do you expect most from the Platform?
                  </label>
                  <input
                    type="text"
                    name="expectations"
                    value={formData.expectations}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Are there any specific challenges or concerns you would like
                    support with?
                  </label>
                  <input
                    type="text"
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Would you like to receive personalized resources, tips, or
                    reminders based on your profile?
                  </label>
                  <select
                    name="wantsPersonalizedResources"
                    value={formData.wantsPersonalizedResources}
                    onChange={handleSelectChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select an option</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Any additional comments or feedback for us?
                  </label>
                  <textarea
                    name="additionalComments"
                    value={formData.additionalComments}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={4}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button onClick={prevStep} variant="outline">
                Back
              </Button>
              <div>
                <Button onClick={nextStep} variant="outline" className="mr-2">
                  Skip
                </Button>
                <Button onClick={nextStep}>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Supporters</h2>
                    <p className="text-muted-foreground">Manage your network of family and friends supporting your pregnancy journey</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold">Connected Supporters</h3>
                    <Button onClick={() => setShowInviteForm(!showInviteForm)}>
                      {showInviteForm ? 'Hide Form' : 'Invite Supporter'}
                    </Button>
                  </div>
                  
                  {showInviteForm && (
                    <InviteSupporterForm onCancel={() => setShowInviteForm(false)} />
                  )}
                  
                  <div className="space-y-4">
                    {supporters.map((supporter) => (
                      <div key={supporter.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarFallback>{supporter.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            {editingSupporterId === supporter.id ? (
                              <div className="space-y-2">
                                <Input 
                                  defaultValue={supporter.name}
                                  onBlur={(e) => handleSaveSupporter(supporter.id, e.target.value, supporter.relationship)}
                                  onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                      handleSaveSupporter(supporter.id, e.currentTarget.value, supporter.relationship);
                                    }
                                  }}
                                  className="w-32"
                                />
                                <Input 
                                  defaultValue={supporter.relationship}
                                  onBlur={(e) => handleSaveSupporter(supporter.id, supporter.name, e.target.value)}
                                  onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                      handleSaveSupporter(supporter.id, supporter.name, e.currentTarget.value);
                                    }
                                  }}
                                  className="w-32"
                                />
                              </div>
                            ) : (
                              <>
                                <p className="font-medium">{supporter.name}</p>
                                <p className="text-sm text-muted-foreground">{supporter.relationship} • Connected {supporter.timeConnected}</p>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="secondary">{supporter.badge}</Badge>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleEditSupporter(supporter.id)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleDeleteSupporter(supporter.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-bold mb-4">Sharing Permissions</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Share Appointment Updates</p>
                          <p className="text-sm text-muted-foreground">Allow supporters to see your appointment schedules and updates</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-tummytales-purple/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tummytales-purple"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Share Milestone Updates</p>
                          <p className="text-sm text-muted-foreground">Share pregnancy milestones and baby development updates</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-tummytales-purple/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tummytales-purple"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Share Health Metrics</p>
                          <p className="text-sm text-muted-foreground">Allow supporters to view basic health metrics and progress</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-tummytales-purple/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-tummytales-purple"></div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-between mt-6">
              <Button onClick={prevStep} variant="outline">
                Back
              </Button>
              <div>
                <Button onClick={nextStep} variant="outline" className="mr-2">
                  Skip
                </Button>
                <Button onClick={nextStep}>
                  Continue
                </Button>
              </div>
            </div>
          </div>
        );
      case 8:
        return formData.supportPerson === "yes" ? (
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold">Supporter Referral</h2>
            <div className="my-8 p-6 border-2 border-tummytales-purple rounded-lg inline-block">
              <p className="text-4xl font-bold tracking-wider">
                {Math.floor(100000 + Math.random() * 900000)}
              </p>
            </div>
            <p className="text-muted-foreground">
              Share this referral pin with your supporter. Once they sign up and enter this pin, 
              they will gain access to the sections you've allowed.
            </p>
            <p className="text-muted-foreground">
              You can edit or revoke access anytime from your profile settings.
            </p>
            
            <div className="mt-8">
              <div>
                <Button onClick={nextStep} variant="outline" className="mr-2">
                  Skip
                </Button>
                <Button onClick={nextStep}>Continue</Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold">Welcome!</h2>
            <div className="my-8">
              <Check className="mx-auto h-16 w-16 text-green-500" />
            </div>
            <p className="text-xl">
              Your pregnancy journey starts here, and we're happy to be part of it.
            </p>
            
            <div className="mt-8">
              <div>
                <Button onClick={finalSubmit} variant="outline" className="mr-2">
                  Skip
                </Button>
                <Button onClick={finalSubmit} className="px-8">LET'S GET STARTED!</Button>
              </div>
            </div>
          </div>
        );
      case 9:
        return (
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold">Welcome!</h2>
            <div className="my-8">
              <Check className="mx-auto h-16 w-16 text-green-500" />
            </div>
            <p className="text-xl">
              Your pregnancy journey starts here, and we're happy to be part of it.
            </p>
            
            <div className="mt-8">
              <div>
                <Button onClick={finalSubmit} variant="outline" className="mr-2">
                  Skip
                </Button>
                <Button onClick={finalSubmit} className="px-8">LET'S GET STARTED!</Button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-3xl mx-auto">
        <CardContent className="pt-6">
          {renderStep()}
        </CardContent>
      </Card>
      
      {step > 1 && step < 9 && (
        <div className="max-w-3xl mx-auto mt-4 flex justify-between text-sm">
          <div>
            Step {step - 1} of 8
          </div>
          <div className="flex space-x-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i} 
                className={`h-1 w-6 rounded-full ${
                  i < step - 1 ? "bg-tummytales-purple" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OnboardingForm;
