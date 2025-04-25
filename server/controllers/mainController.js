exports.homepage = async (req, res) => {
  const locals = {
    title: "Notes",
    description: "A note-taking app",
  };

  res.render("index", {
    locals,
    layout: "../views/layouts/front-page",
  });
};

exports.about = async (req, res) => {
  const locals = {
    title: "About - Notes",
    description: "A note-taking app.",
  };
  res.render("about", locals);
};
