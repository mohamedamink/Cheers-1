const router = require("express").Router();
const controler = require("../controllers/controlAz.js");

router.get("/events/:id", controler.getEventRequest);
router.get("/user/:id", controler.selectRequest);
router.put("/user/:id/updateprofil", controler.updateRequest);
router.get("/eventpage/:event_id", controler.getPageEventRequest);
router.put("/vote/:user_id/:event_id", controler.getVoteEvent);
router.get("/vote/color/:user_id/:event_id", controler.verifyFollowed);
router.get("/followedevents/:id", controler.getFollowedEvents);

module.exports = router;
