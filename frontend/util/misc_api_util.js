import moment from 'moment';

export const uploadedAt = past => {
  return moment(past).fromNow();
}

export const generateBackground = () => {
  const hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];

  function populate(a) {
    for (var i = 0; i < 6; i++) {
      var x = Math.round(Math.random() * 14);
      var y = hexValues[x];
      a += y;
    }
    return a;
  }

  const c1 = populate('#');
  const c2 = populate('#');
  const angle = Math.round(Math.random() * 360);
  return { background: "linear-gradient(" + angle + "deg, " + c1 + ", " + c2 + ")" };
}