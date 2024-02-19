from django.shortcuts import render
from validate_email import validate_email
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class ValidateEmailView(APIView):

    def post(self,request, format=None):
        if "email" not  in request.data:
                 return Response({"error":"Please Provide Email"},status=status.HTTP_400_BAD_REQUEST)
        
        email = request.data['email']

        is_valid = validate_email(
            email_address=email,
            check_format=True,
            check_blacklist=True,
            check_dns=True,
            dns_timeout=10,
            check_smtp=True,
            smtp_timeout=10,
          )
        if is_valid:
              return Response({"message":"Your Email is Valid"},status=status.HTTP_200_OK)
        return Response({"error":"Email Doesn't Exist"},status=status.HTTP_400_BAD_REQUEST)
        
        



