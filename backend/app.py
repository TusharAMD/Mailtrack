from flask import Flask, request, send_from_directory,jsonify
import socket
from requests import get
from flask_cors import CORS,cross_origin
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from PIL import Image
import datetime
import pymongo

app = Flask(__name__, static_url_path='/static')
cors = CORS(app)

@app.route('/explorer/<username>/<path>',methods=["GET","POST"])
@cross_origin()
def explorer(username,path):
    myclient = pymongo.MongoClient("mongodb+srv://admin:admin@cluster0.wonbr.mongodb.net/Mailtrack?retryWrites=true&w=majority")
    mydb = myclient["Mailtrack"]
    mycol = mydb["Emailtrack"]

    mycol.find_one_and_update({'filename':path}, {'$push': {'opened': str(datetime.datetime.now().strftime("%Y-%m-%d %H-%M-%S"))}}, upsert = True)
    
    ip = get('https://api.ipify.org').text
    print ('My public IP address is:', ip)
    print("Path Name:", path,"\nUserName:", username)
    return send_from_directory('static', f"{username}/{path}")


@app.route('/dashdata',methods=["GET","POST"])
@cross_origin()
def dashdata():
    myclient = pymongo.MongoClient("mongodb+srv://admin:admin@cluster0.wonbr.mongodb.net/Mailtrack?retryWrites=true&w=majority")
    mydb = myclient["Mailtrack"]
    mycol = mydb["Emailtrack"]
    
    if request.method=="POST":
        print(request.json,"Dash Board Request")
        x = mycol.find({"sender":request.json["email"]})
        li=[]
        dicti = {}
        for ele in x:
            print(ele["sender"],ele["receiver"],ele["opened"])
            dicti["sender"]=ele["sender"]
            dicti["receiver"]=ele["receiver"]
            dicti["opened"]=ele["opened"]
            li.append({"sender":ele["sender"],"receiver":ele["receiver"],"opened":ele["opened"]})
            dicti={}
        return jsonify ({"res":li})

    return jsonify({1:1})



@app.route('/sendemail',methods=["GET","POST"]) 
@cross_origin()   
def sendemail():
    if request.method=="POST":
        sender_email = request.json["useremail"]
        receiver_email = request.json["recemail"]
        password = request.json["userpass"]

        message = MIMEMultipart("alternative")
        message["Subject"] = request.json["subject"]
        message["From"] = sender_email
        message["To"] = receiver_email
        
        if not (os.path.isdir(f"static/{request.json['useremail']}")):
            os.mkdir(f"static/{request.json['useremail']}")
        image = Image.new('RGB', (10, 10))
        filename = str(sender_email)+"_"+str(receiver_email)+"_"+str(datetime.datetime.now().strftime("%Y-%m-%d+%H-%M-%S"))
        im1 = image.save(f"static/{request.json['useremail']}/{filename}.jpg")
        
        
        # Create the plain-text and HTML version of your message
        text = request.json["mailcontent"]
        html = f"""\
        <html>
          <body>
            <p>
               <img src="https://mailtracktva.herokuapp.com/explorer/{request.json['useremail']}/{filename}.jpg"></img>
            </p>
          </body>
        </html>
        """
        
        print(f"https://mailtracktva.herokuapp.com/explorer/{request.json['useremail']}/{filename}.jpg")
        
        # Turn these into plain/html MIMEText objects
        part1 = MIMEText(text, "plain")
        part2 = MIMEText(html, "html")

        # Add HTML/plain-text parts to MIMEMultipart message
        # The email client will try to render the last part first
        message.attach(part1)
        message.attach(part2)

        # Create secure connection with server and send email
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
            server.login(sender_email, password)
            server.sendmail(
                sender_email, receiver_email, message.as_string()
            )
        print(request.json)
        
        myclient = pymongo.MongoClient("mongodb+srv://admin:admin@cluster0.wonbr.mongodb.net/Mailtrack?retryWrites=true&w=majority")
        mydb = myclient["Mailtrack"]
        mycol = mydb["Emailtrack"]
        mydict={"sender":sender_email,"receiver":receiver_email,"filename":filename+".jpg","opened":[]}
        x = mycol.insert_one(mydict)
        
        
        return jsonify({1:1})
    return jsonify({1:1})
if __name__ == "__main__":
    app.run(debug=True)