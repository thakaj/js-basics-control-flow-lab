function scuberGreetingForFeet(distance){
  if (distance <= 400){
  return distance = 'This one is on me!';
  }else if (distance >= 2001 && distance <= 2500){
  return distance = `I will gladly take your thirty bucks.`
  }else if (distance > 2500){
    return distance = `No can do.`
  } 
}

function ternaryCheckCity(city){
 return (city === `NYC` ? `Ok, sounds good.`:`No go.`);{
 } 
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case "generous":
      return `Thank you so much.`;
      break;
    case "not as generous":
      return `Thank you.`;
      break;
    default:
      return "Bye."
      break;
  }
}