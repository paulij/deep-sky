package ds.deepsky110;

import org.apache.cordova.DroidGap;

import android.os.Bundle;


public class MyPhoneGapActivity extends DroidGap {
     
    @Override
    public void onCreate(Bundle savedInstanceState) {
        // Loading your HTML as per PhoneGap tutorial
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
   }    
}
