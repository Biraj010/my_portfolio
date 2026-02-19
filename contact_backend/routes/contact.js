const express = require('express');
const { body, validationResult } = require('express-validator');
const { sendContactEmail } = require('../services/emailService');

const router = express.Router();

router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').optional().trim(),
    body('message').trim().notEmpty().withMessage('Message is required')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ 
          success: false, 
          errors: errors.array() 
        });
      }

      const { name, email, phone, message } = req.body;

      await sendContactEmail({ name, email, phone, message });

      res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully!'
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
    }
  }
);

module.exports = router;
