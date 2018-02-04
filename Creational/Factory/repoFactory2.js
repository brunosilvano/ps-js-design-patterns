var repoFactory = function () {
  var repos = this;
  var repolist = [
    { name: 'task', source: './taskRepository.js'},
    { name: 'user', source: './userRepository.js'},
    { name: 'project', source: './projectRepository.js'}
  ];

  repolist.forEach(function (repo) {
    repos[repo.name] = require(repo.source)();
  });
};

module.exports = new repoFactory();
