import express from 'express';
import mongoose from 'mongoose';
import Announcement from '../announcement_page/post.js';

const router = express.Router();

export const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json(announcements);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAnnouncement = async (req, res) => {
  const { id } = req.params;
  try {
    const announcement = await Announcement.findById(id);
    res.status(200).json(announcement);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAnnouncement = async (req, res) => {
  const { title, selectedFile, announcement, admin, club, tags } = req.body;
  const newAnnouncement = new Announcement({
    title,
    selectedFile,
    announcement,
    admin,
    club,
    tags,
  });
  try {
    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateAnnouncement = async (req, res) => {
  const { id } = req.params;
  const { title, selectedFile, announcement, admin, club, tags } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Announcement with id: ${id}`);
  const updatedAnnouncement = {
    creator,
    selectedFile,
    announcement,
    admin,
    club,
    tags,
    _id: id,
  };
  await Announcement.findByIdAndUpdate(id, updatedAnnouncement, { new: true });
  res.json(updatedAnnouncement);
};

export const deleteAnnouncement = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No Announcement with id: ${id}`);
  await Announcement.findByIdAndRemove(id);
  res.json({ message: 'Announcement deleted successfully.' });
};

export default router;
