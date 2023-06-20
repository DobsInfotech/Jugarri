const HTTP = require("../../constant/response.constant");

const axios = require("axios");

class class1 {
  static a = async (req, res) => {
    try {
      if (req.secure) {
        axios
          .get(
            "https://script.google.com/macros/s/AKfycbwitZAiM5PaagrQuzreHv9gpPqU6mfMHMZ8VJF7jYGf0U28Sh0Ypr4o9SPlzMGdggEV/exec"
          )
          .then((response) => {
            var data = response.data;
            data.shift();
            res.render("First", { data });
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        res.redirect("https://jugarri.com");
      }
    } catch (e) {
      console.log(e);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static c = async (req, res) => {
    try {
      res.render("Files");
    } catch (e) {
      console.log(e);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static d = async (req, res) => {
    try {
      res.send("File upload");
    } catch (e) {
      console.log(e);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
  static e = async (req, res) => {
    try {
      function fetchData(id) {
        return new Promise((resolve) => {
          var data3 = [];
          axios
            .get(
              "https://script.google.com/macros/s/AKfycbzMwG-rCfDMGpDwpwRhK_fmLzT_nUbptyqk5ez7cjV9bxs5q_q1fYJ58cChNKjpQSIm/exec"
            )
            .then((response) => {
              var data4 = response.data;
              data4.shift();
              for (var i = 0; i < data4.length; i++) {
                if (data4[i][0] == id) {
                  data3.push(data4[i]);
                }
              }
              resolve(data3);
            });
        });
      }
      axios
        .get(
          "https://script.google.com/macros/s/AKfycbwitZAiM5PaagrQuzreHv9gpPqU6mfMHMZ8VJF7jYGf0U28Sh0Ypr4o9SPlzMGdggEV/exec"
        )
        .then((response) => {
          var data = response.data;
          var data4 = [];
          data.shift();
          for (var i = 0; i < data.length; i++) {
            if (data[i][1] == req.params.id) {
              data4.push(data[i]);
            }
          }
          fetchData(req.params.id).then((data3) => {
            res.render("Second", { data4, data3 });
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (e) {
      console.log(e);
      return res.status(HTTP.SUCCESS).send({
        errors: [
          {
            message: "Something went wrong!",
            code: HTTP.INTERNAL_SERVER_ERROR,
          },
        ],
      });
    }
  };
}

module.exports = { class1 };
