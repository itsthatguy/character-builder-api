import Build from '../models/Build';

class Builds {
  INDEX = (req, res) => {
    Build
    .query()
    .eager('user')
    .then((foo) => {
      console.log(foo);
      res.send(foo);
    })
    .catch(err => res.send(err));
  }

  SHOW = (req, res) => {
    const { id } = req.params;
    if (!id) return res.json({ error: 'Please provide an id' });

    Build
    .query()
    .eager('user')
    .where({ id })
    .then((foo) => {
      console.log(foo);
      res.send(foo);
    })
    .catch(err => res.send(err));
  }

  CREATE = (req, res) => {
    const buildParams = {
      value: req.body.value,
      user_id: req.body.user_id,
    };

    Build
    .query()
    .eager('user')
    .insert(buildParams)
    .then((build) => {
      res.json(build);
    })
    .catch(err => res.send(err));
  }

  DELETE = (req, res) => {
    const { id } = req.params;
    if (!id) return res.json({ error: 'Please provide an id' });

    Build
    .query()
    .delete()
    .where({ id })
    .then((build) => {
      res.json(build);
    })
    .catch(err => res.send(err));
  }
}

export default new Builds();
