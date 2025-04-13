exports.homepage = async (req, res) => {
  const locals = {
    title: "NotesGoose",
    description: "A note-taking app",
  };

  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

exports.about = async (req, res) => {
  const locals = {
    title: "About - NotesGoose",
    description: "A note-taking app.",
  };
  res.render("about", locals);
};
