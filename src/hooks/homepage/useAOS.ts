//src/hooks/homepages/useAOS.ts

import { useEffect, useState } from "react";
import AOS from "aos";

const useAOS = () => {
  const [isAOSInitialized, setAOSInitialized] = useState(false);

  useEffect(() => {
    if (!isAOSInitialized) {
      AOS.init({
        // ... your initialization parameters here
        duration: 1000, // durasi animasi (ms)
        easing: 'ease-out-cubic',
        once: false, // animasi cuma jalan sekali pas muncul
        offset: 50, // jarak dari bawah viewport sebelum animasi aktif
      });
      setAOSInitialized(true);
    }
  }, [isAOSInitialized]);

  return isAOSInitialized;
};

export default useAOS;