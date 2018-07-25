/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');

        app.addIframe();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    addIframe : function () {
        i = document.createElement("iframe");

        i.src = "https://intelsoftware.thetrainingarcade.com/games/jump/#!/optane";
        i.addEventListener('load', this.iframeLoaded, false);
        //var ht= i.currentTarget.contentWindow.body.offsetHeight + 'px';
        //i.addEventListener('onload',this.resizeIframe,false);
        //var container = document.getElementById('main-body');
        //console.log(container, container.offsetHeight);
        //i.style.height = container.offsetHeight + 'px'; 
        console.log(i.style.height);  
        //i.setAttribute('height', container.offsetHeight);         
        i.setAttribute('height', "700");
        i.setAttribute('width', "100%");
        i.setAttribute('allowFullScreen', '');
        //document.getElementById('app1').appendChild(i);
        document.body.appendChild(i);
    },

    iframeLoaded : function (e) {

        console.log("iFrame loaded at\n" + e.currentTarget.contentWindow.location.href);
        var ht= e.currentTarget.contentWindow.body.offsetHeight + 'px';
        console.log("height is" + ht);
        e.setAttribute('height', ht);
        e.setAttribute('width', "100%");

    },

    resizeIframe : function(e) {
            e.style.height = e.contentWindow.document.body.scrollHeight + 'px';
          }
};

app.initialize();
