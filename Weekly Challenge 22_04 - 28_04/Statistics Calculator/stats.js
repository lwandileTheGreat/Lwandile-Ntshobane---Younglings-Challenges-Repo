$(document).ready(function () {
  $("#add").click(function () {
    var lastField = $("#buildyourform div:last");
    var intId =
      (lastField && lastField.length && lastField.data("idx") + 1) || 1;
    var fieldWrapper = $('<div class="fieldwrapper" id="field' + intId + '"/>');
    fieldWrapper.data("idx", intId);

    var fName = $(
      '<input type="number" class="fieldname" name="number' +
        intId +
        '" id="number' +
        intId +
        '"/>'
    );
    var removeButton = $('<input type="button"  class="remove" value="-" />');
    removeButton.click(function () {
      $(this).parent().remove();
    });
    fieldWrapper.append(fName);
    fieldWrapper.append(removeButton);
    $("#buildyourform").append(fieldWrapper);
  });

  var arr = {
    max: function (array) {
      return Math.max.apply(null, array);
    },

    min: function (array) {
      return Math.min.apply(null, array);
    },

    range: function (array) {
      return arr.max(array) - arr.min(array);
    },

    sum: function (array) {
      const num = array.map((i) => Number(i));
      var sum = num.reduce(function (a, b) {
        return a + b;
      }, 0);

      return sum;
    },

    average: function (array) {
      return arr.sum(array) / array.length;
    },

    median: function (array) {
      const num = array.map((i) => Number(i));
      if (!array.length) {
        return 0;
      }
      var numbers = array.slice(0).sort((a, b) => a - b);
      var middle = Math.floor(numbers.length / 2);
      var isEven = numbers.length % 2 === 0;
      return isEven
        ? numbers[middle] / 2 + numbers[middle - 1] / 2
        : numbers[middle];
    },

    modes: function (array) {
      if (!array.length) return [];
      var modeMap = {},
        maxCount = 0,
        modes = [];

      array.forEach(function (val) {
        if (!modeMap[val]) modeMap[val] = 1;
        else modeMap[val]++;

        if (modeMap[val] > maxCount) {
          modes = [val];
          maxCount = modeMap[val];
        } else if (modeMap[val] === maxCount) {
          modes.push(val);
          maxCount = modeMap[val];
        }
      });
      return modes;
    },

    variance: function (array) {
      var mean = arr.average(array);
      return arr.average(
        array.map(function (num) {
          return Math.pow(num - mean, 2);
        })
      );
    },

    standardDeviation: function (array) {
      return Math.sqrt(arr.variance(array));
    },
  };
  // Mode
  $(".btn1").on("click", function () {
    var list = [];

    var numbers = document.getElementsByClassName("fieldname");
    console.log(numbers);
    var i = 0;
    var j = 1;
    while (i < numbers.length) {
      if ($("#number" + j).val() != "") {
        list.push($("#number" + j).val());
      }

      j++;
      i++;
    }
    var mode = arr.modes(list);

    console.log(mode);

    console.log(list);
    if (mode.length != list.length) {
      document.getElementById("calculatedAns").innerHTML = mode;
    } else {
      document.getElementById("calculatedAns").innerHTML = "N/A";
    }
    var average = arr.average(list);

    document.getElementById("calculatedTxt").innerHTML = "Mode";
  });
  //Sum
  $(".btn2").on("click", function () {
    var list = [];
    var numbers = document.getElementsByClassName("fieldname");
    console.log(numbers);
    var i = 0;
    var j = 1;
    while (i < numbers.length) {
      list.push($("#number" + j).val());
      j++;
      i++;
    }
    var sum = arr.sum(list);
    if (sum.length != list.length) {
      document.getElementById("calculatedAns").innerHTML = sum;
    } else {
      document.getElementById("calculatedAns").innerHTML = "N/A";
    }

    document.getElementById("calculatedTxt").innerHTML = "Sum";
  });
  //Range
  $(".btn3").on("click", function () {
    var list = [];
    var numbers = document.getElementsByClassName("fieldname");
    console.log(numbers);
    var i = 0;
    var j = 1;
    while (i < numbers.length) {
      if ($("#number" + j).val() != "") {
        list.push($("#number" + j).val());
      }
      j++;
      i++;
    }

    var range = arr.range(list);

    document.getElementById("calculatedAns").innerHTML = range;
    document.getElementById("calculatedTxt").innerHTML = "Range";
  });

  //Median
  $(".btn4").on("click", function () {
    var list = [];
    var numbers = document.getElementsByClassName("fieldname");
    console.log(numbers);
    var i = 0;
    var j = 1;
    while (i < numbers.length) {
      if ($("#number" + j).val() != "") {
        list.push($("#number" + j).val());
      }
      j++;
      i++;
    }

    var median = arr.median(list);

    document.getElementById("calculatedAns").innerHTML = median;
    document.getElementById("calculatedTxt").innerHTML = "Median";
  });

  //Average
  $(".btn5").on("click", function () {
    var list = [];
    var numbers = document.getElementsByClassName("fieldname");
    console.log(numbers);
    var i = 0;
    var j = 1;
    while (i < numbers.length) {
      if ($("#number" + j).val() != "") {
        list.push($("#number" + j).val());
      }
      j++;
      i++;
    }

    var average = arr.average(list);

    document.getElementById("calculatedAns").innerHTML = average;
    document.getElementById("calculatedTxt").innerHTML = "Average";
  });

  //standard deviation
  $(".btn6").on("click", function () {
    var list = [];
    var numbers = document.getElementsByClassName("fieldname");
    console.log(numbers);
    var i = 0;
    var j = 1;
    while (i < numbers.length) {
      if ($("#number" + j).val() != "") {
        list.push($("#number" + j).val());
      }
      j++;
      i++;
    }

    var sd = arr.standardDeviation(list);

    document.getElementById("calculatedAns").innerHTML = sd;
    document.getElementById("calculatedTxt").innerHTML = "Sd";
  });
});
