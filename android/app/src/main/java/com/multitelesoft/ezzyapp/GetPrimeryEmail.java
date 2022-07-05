package com.multitelesoft.ezzyapp;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

import android.accounts.Account;
import android.accounts.AccountManager;
import android.util.Log;
import android.util.Patterns;
import android.widget.TextView;
import android.widget.Toast;
import java.util.regex.Pattern;
import android.app.Activity;
import com.facebook.react.bridge.Callback;

public class GetPrimeryEmail extends ReactContextBaseJavaModule {
    GetPrimeryEmail(ReactApplicationContext context) {
       super(context);
   }

 @ReactMethod
public void getEmails(Callback callback) {
    final Activity activity = getCurrentActivity();
    Pattern emailPattern = Patterns.EMAIL_ADDRESS;
    Account[] accounts = AccountManager.get(activity).getAccounts();
     
    for (Account account : accounts) {
       if (emailPattern.matcher(account.name).matches()) {
        callback.invoke(accounts.toString()); 
       }
    }

    Log.d("GetPrimeryEmail", "Create event called with name: "
   + " and location: ");
}
 

   @Override
    public String getName() {
        return "GetPrimeryEmail";
    }
}