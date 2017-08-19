import User from '../models/User';

class Users {
  INDEX = (req, res) => {
    User
    .query()
    .eager('builds')
    .then((foo) => {
      console.log(foo);
      res.send(foo);
    })
    .catch(err => res.send(err));
  }

  SHOW = (req, res) => {
    const { id } = req.params;
    if (!id) return res.json({ error: 'Please provide an id' });

    User
    .query()
    .where({ id })
    .then((foo) => {
      res.send(foo);
    })
    .catch(err => res.send(err));
  }

  CREATE = (req, res) => {
    const { username } = req.body;

    User
    .query()
    .insert({ username })
    .then((build) => {
      res.json(build);
    })
    .catch(err => res.send(err));
  }

  DELETE = (req, res) => {
    const { id } = req.params;
    if (!id) return res.json({ error: 'Please provide an id' });

    User
    .query()
    .delete()
    .where({ id })
    .then((build) => {
      res.json(build);
    })
    .catch(err => res.send(err));
  }
}

export default new Users();
