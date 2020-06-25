import { Router, Request, Response } from 'express';

const router = Router();

router.get('/test', (req: Request, res: Response) => {
  res.json({
    ok: true,
    message: 'Everything is ok',
  });
});

router.get('/test/:id', (req: Request, res: Response) => {
  const id = req.params.id;

  res.json({
    ok: true,
    message: 'Everything is ok',
    id,
  });
});

export default router;
