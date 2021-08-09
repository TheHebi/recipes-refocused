module.exports = {
    format_date: (date) => {
      return date.toLocaleDateString();
    },
    isEqualTo: (input1, input2) => {
      console.log(input1)
      console.log(input2)
      const result = (input1 == input2) ? true : false;
      return result;
    }
};