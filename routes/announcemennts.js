import express from 'express';

import {
  getAnnouncements,
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from '../server/src/controllers';

const router = express.Router();

router.get('/', getAnnouncements);
router.post('/', createAnnouncement);
router.get('/:id', getAnnouncement);
router.patch('/:id', updateAnnouncement);
router.delete('/:id', deleteAnnouncement);

export default router;
