import { Router, Request, Response } from 'express';
import MySql from '../mysql/mysql';

const router = Router();

router.get('/test', (req: Request, res: Response) => {
  const query = `
    SELECT *
    FROM test`;

  MySql.executeQuery(query, (err, test) => {
    if (err) {
      res.status(400).json({
        ok: false,
        error: err,
      });
    } else {
      res.json({
        ok: true,
        test,
      });
    }
  });
});

router.get('/test/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const escapeId = MySql.instance.connection.escape(id);

  const query = `
    SELECT *
    FROM test
    WHERE id = ${escapeId}`;

  MySql.executeQuery(query, (err, test) => {
    if (err) {
      res.status(400).json({
        ok: false,
        error: err,
      });
    } else {
      res.json({
        ok: true,
        test,
      });
    }
  });
});

export default router;
