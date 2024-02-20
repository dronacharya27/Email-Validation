from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from validate_email import validate_email,validate_email_or_fail
from validate_email.exceptions import EmailValidationError

class ValidateEmailView(APIView):

    def post(self,request, format=None):
        if "email" not  in request.data:
                 return Response({"error":"Please Provide Email"},status=status.HTTP_400_BAD_REQUEST)
        
        email = request.data['email']

        if email == '':
              return Response({"error":"Please Provide Email"},status=status.HTTP_400_BAD_REQUEST)
        try:  
          validate_email_or_fail(
              email_address=email,
              check_format=True,
              check_blacklist=True,
              check_dns=True,
              dns_timeout=10,
              check_smtp=True,
              smtp_timeout=10,
            )
          return Response({"message":"Your Email is Valid"},status=status.HTTP_200_OK)
        except EmailValidationError as e:
              return Response({"error":f"{e}"},status=status.HTTP_400_BAD_REQUEST)
       
        
        