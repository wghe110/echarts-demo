import JSEncrypt from 'jsencrypt';

// 数据加密方法
const rsaPubKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC0Jr1NzVUQMburkZT6Rkt0eaPmH8TN6E258l2tZMJgVCP/sL4oKjroKYmNPBkSSiLKFr9wwJqfesMeef6ChGRUXjG6DX0oxQRe0f5/UnyEm/NicJwz9xwkU34gbuo1VB/EA2QZ5dl1rj9iSsiqKLK6/QFlVuzslRdAXYZC79vprwIDAQAB';
export const encryptPassword = (str) => {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(rsaPubKey);
  return encryptor.encrypt(str);
};


// requestAnimationFrame 模拟 setInterval
export class IntervalTimer {
  constructor(fn, interval) {
    this.interval = interval;
    this.fn = fn;
    this.lastTime = Date.now();
    this.timer = null;

    this.loop();
  }

  loop() {
    const now = Date.now();
    const sub = now - this.lastTime;
    if (sub >= this.interval) {
      this.lastTime = now;
      if (typeof this.fn === 'function') {
        this.fn();
      }
    }

    this.timer = requestAnimationFrame(IntervalTimer.prototype.loop.bind(this));
  }

  clear() {
    if (this.timer) {
      cancelAnimationFrame(this.timer);
      this.timer = null;
    }
  }
}