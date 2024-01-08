import React from "react";
import styles from './../src/styles/phone.module.css'

export function Phone() {
  return <div className={styles.phone}>
          <section className={styles["phone-top"]}>
            <div className={styles["camera-container"]}>
              
            </div>
            <button title="Back" id={styles.backBtn}>
            <i class="fa-solid fa-chevron-left"></i>
            </button>
            <img src="/avatar.jpg" alt="" />
            <p className={styles.availability}>
              <span>Samuel Green</span>
              <span>Available to Walk</span>
            </p>
            <button title="Menu">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>


          </section>
          <div className={styles["chat-content"]}>
            <p id={styles.firstchat} className={`
              ${styles["friends-chat"]} 
              ${styles.chat}
            `}>That sounds great. I’d be happy to discuss more.</p>
            
            <p id={styles.secondchat} className={`
              ${styles["friends-chat"]} 
              ${styles.chat}
            `}>Could you send over some pictures of your dog, please?</p>

            <div className={styles["pictures-chat"]}>
              <img src="/dog-image-1.jpg" alt="Dog Image 1" />
              <img src="/dog-image-2.jpg" alt="Dog Image 2" />
              <img src="/dog-image-3.jpg" alt="Dog Image 3" />
            </div>
            <p id={styles.thirdchat} className={`
              ${styles["my-chat"]} 
              ${styles.chat}
            `}>Here are a few pictures. She’s a happy girl!</p>

            <p id={styles.fourthchat} className={`
              ${styles["my-chat"]} 
              ${styles.chat}
            `}>Can you make it?</p>
            <p id={styles.fifthchat} className={`
              ${styles["friends-chat"]} 
              ${styles.chat}
            `}>She looks so happy! The time we discussed works. How long shall I take her out for?</p>

            
            <div id={styles.sixthchat} className={styles["chat-prices"]}>
              <p>30 minute walk</p>
              <h1>$29</h1>
            </div>
            <div id={styles.seventhchat} className={styles["chat-prices"]}>
              <p>1 hour walk</p>
              <h1>$49</h1>
            </div>

            <div id={styles.inputchat}>
              <input disabled placeholder="Type a message..." id={styles.sendChatInput} type="text" name="chat-input" />
              <button title="Send" id={styles.sendChatBtn}>
              <i class="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>;
}
  