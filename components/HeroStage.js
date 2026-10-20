import { Bookmark, CalendarCheck, ChevronRight, Heart, MessageCircle, MoreHorizontal, Send } from "lucide-react";
import Photo from "./Photo.js";

// Fictional example ads, labelled as examples on the page; never present these as clients.
const ads = [
  { brand: "Northside Strength", handle: "northsidestrength", cta: "Book a class", caption: "Your first week is on us. Classes for every level.", photo: "1757924284732-4189190321cf" },
  { brand: "Bloom Botanics", handle: "bloombotanics", cta: "Shop now", caption: "Clean skincare, made for daily rituals.", photo: "1739950839930-ef45c078f316" },
  { brand: "Coach Maya Fit", handle: "coachmayafit", cta: "Apply now", caption: "1:1 strength coaching, online or in person.", photo: "1758875569256-f37c438cac65" },
  { brand: "Still Studio", handle: "stillstudio", cta: "Learn more", caption: "New-member intro classes start this week.", photo: "1783841193384-4269c68aa050" },
];

const s = { size: 18, strokeWidth: 1.75, "aria-hidden": true };

function Ad({ ad }) {
  return (
    <div className="ad">
      <div className="ad-head">
        <span className="ad-avatar">{ad.brand[0]}</span>
        <span className="ad-name">
          <b>{ad.brand}</b>
          <small>Sponsored</small>
        </span>
        <MoreHorizontal size={16} strokeWidth={1.75} aria-hidden="true" />
      </div>
      <Photo id={ad.photo} alt="" ratio={1} sizes="280px" />
      <div className="ad-cta">
        {ad.cta}
        <ChevronRight size={14} strokeWidth={2} aria-hidden="true" />
      </div>
      <div className="ad-actions">
        <Heart {...s} />
        <MessageCircle {...s} />
        <Send {...s} />
        <Bookmark {...s} className="ad-save" />
      </div>
      <p className="ad-caption">
        <b>{ad.handle}</b> {ad.caption}
      </p>
    </div>
  );
}

export default function HeroStage() {
  return (
    <div className="stage">
      <figure className="float-card float-left">
        <Photo id="1552196527-bffef41ef674" alt="" ratio={0.78} sizes="240px" />
        <figcaption>Paid ads</figcaption>
      </figure>
      <figure className="float-card float-right">
        <Photo id="1695408247109-3bf125ad0538" alt="" ratio={0.78} sizes="240px" />
        <figcaption>Creator content</figcaption>
      </figure>

      <div className="chip chip-live" aria-hidden="true">
        <span className="live-dot" />
        <span><b>Campaign live</b><small>Meta Ads</small></span>
      </div>
      <div className="chip chip-scheduled" aria-hidden="true">
        <CalendarCheck size={20} strokeWidth={1.75} />
        <span><b>Post scheduled</b><small>Tue, 9:00 AM</small></span>
      </div>
      <div className="chip chip-brief" aria-hidden="true">
        <Send size={18} strokeWidth={1.75} />
        <span><b>Creator brief sent</b><small>5 creators</small></span>
      </div>

      <div className="phone" role="img" aria-label="Phone showing example social media ads for wellness brands">
        <div className="screen" aria-hidden="true">
          <span className="island" />
          <div className="status">
            <b>9:41</b>
          </div>
          <div className="feed">
            <div className="feed-track">
              {[...ads, ...ads].map((ad, i) => (
                <Ad ad={ad} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="stage-note">Example ads, for illustration</p>
    </div>
  );
}
