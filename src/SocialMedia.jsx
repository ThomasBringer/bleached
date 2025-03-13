import React from 'react';
import { FaSteam, FaDiscord, FaYoutube, FaLinkedin, FaInstagram, FaTiktok, FaItchIo } from 'react-icons/fa';
import { BsGlobe as FaItch } from 'react-icons/bs';
import { FaBluesky, FaSquareInstagram, FaXTwitter } from 'react-icons/fa6';
import './SocialMedia.css';

const SocialMedia = () => {
  return (
    <div className="social-bar">
      {/* <a href="https://steamcommunity.com/id/yoursteamid" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaSteam size={30} />
      </a> */}
      <a href="https://thomas-bringer.itch.io/bleached/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaItchIo size={30} />
      </a>
      <a href="https://discord.gg/sbyps6fEmT" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaDiscord size={30} />
      </a>
      <a href="https://www.youtube.com/@thomasbringer9485" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaYoutube size={30} />
      </a>
      <a href="https://x.com/thomas_bringer" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaXTwitter size={30} />
      </a>
      <a href="https://bsky.app/profile/thomasbringer.bsky.social" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaBluesky size={30} />
      </a>
      <a href="https://www.linkedin.com/in/thomas-bringer-8b94a0254/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaLinkedin size={30} />
      </a>
      <a href="https://www.instagram.com/thomasbringer/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaSquareInstagram size={30} />
      </a>
      {/* <a href="https://www.tiktok.com/@yourtiktok" target="_blank" rel="noopener noreferrer" className="social-icon">
        <FaTiktok size={30} />
      </a> */}
    </div>
  );
};

export default SocialMedia;