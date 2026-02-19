# ✅ Contact Form Backend Checklist

## Installation Status

- [x] Backend folder created
- [x] Node.js dependencies installed
- [x] Express server configured
- [x] SMTP email service set up
- [x] Contact API endpoint created
- [x] Input validation added
- [x] CORS configured
- [x] Frontend Contact component updated
- [x] Environment variables configured
- [x] Documentation created

## Before First Run

- [ ] Get Gmail App Password from Google Account
- [ ] Update `.env` file with your App Password
- [ ] Verify `SMTP_USER` and `EMAIL_TO` are correct

## Testing Checklist

- [ ] Backend server starts without errors
- [ ] Frontend server starts without errors
- [ ] Can access backend at http://localhost:5000
- [ ] Can access frontend at http://localhost:5173
- [ ] Contact form displays correctly
- [ ] Form validation works (try submitting empty form)
- [ ] Loading state shows when submitting
- [ ] Success message appears after submission
- [ ] Email received in inbox

## Files Created

### Backend (`contact_backend/`)
- [x] `server.js` - Main Express server
- [x] `package.json` - Dependencies
- [x] `routes/contact.js` - Contact endpoint
- [x] `services/emailService.js` - SMTP service
- [x] `.env` - Environment config (✏️ needs your App Password)
- [x] `.env.example` - Template
- [x] `.gitignore` - Git ignore rules
- [x] `README.md` - Backend documentation
- [x] `CHECKLIST.md` - This file

### Frontend Updates
- [x] `myPortfolio/src/components/Contact.jsx` - API integration

### Root Level
- [x] `QUICK_START.md` - Quick setup guide
- [x] `SETUP_GUIDE.md` - Detailed setup guide
- [x] `start-backend.bat` - Backend launcher
- [x] `start-frontend.bat` - Frontend launcher

## Common Issues & Solutions

### ❌ "Invalid login: 535-5.7.8 Username and Password not accepted"
**Solution:** You're using regular password instead of App Password
1. Go to Google Account Security
2. Generate App Password
3. Use that in `.env`

### ❌ "connect ECONNREFUSED ::1:5000"
**Solution:** Backend server is not running
1. Open terminal
2. Run `start-backend.bat`

### ❌ "CORS policy error"
**Solution:** Frontend URL mismatch
1. Check `.env` has `FRONTEND_URL=http://localhost:5173`
2. Restart backend server

### ❌ Email not received
**Solution:** 
1. Check spam folder
2. Verify `EMAIL_TO` in `.env`
3. Check backend terminal for errors

## Production Deployment TODO

- [ ] Deploy backend to hosting platform
- [ ] Set production environment variables
- [ ] Update frontend API URL
- [ ] Update CORS to production domain
- [ ] Add rate limiting
- [ ] Set up SSL certificate
- [ ] Configure domain DNS
- [ ] Test production deployment

## Security Checklist

- [x] `.env` file in `.gitignore`
- [x] Using App Password (not regular password)
- [x] CORS configured for specific origin
- [x] Input validation enabled
- [ ] Rate limiting (recommended for production)
- [ ] reCAPTCHA (recommended for production)

## Next Steps

1. **NOW**: Update `.env` with your Gmail App Password
2. **NOW**: Test locally by submitting the contact form
3. **LATER**: Deploy to production when ready

---

**Last Updated:** 2026-02-18  
**Status:** Ready for testing (needs Gmail App Password)
