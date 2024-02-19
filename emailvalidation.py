from validate_email import validate_email,validate_email_or_fail
from validate_email.exceptions import EmailValidationError

try: 
    validate_email_or_fail(
    email_address='admin@haha.com',
    check_format=True,
    check_blacklist=False,
    check_dns=True,
    dns_timeout=10,
    check_smtp=True,
    smtp_timeout=10,
    smtp_skip_tls=False,
    smtp_tls_context=None,
    smtp_debug=True,
)
except EmailValidationError as e:
    print(e)


is_valid = validate_email(
                email_address='dk27208@wireconnected.com',
                check_format=True,
                check_blacklist=False,
                check_dns=True,
                dns_timeout=10,
                check_smtp=True,
                smtp_timeout=10,
                smtp_from_address='dummy.2708.1@gmail.com',
                smtp_skip_tls=False,
                smtp_tls_context=None,
                smtp_debug=False,
              )

print(is_valid)



 # smtp_helo_host='smtp.gmail.com',
 # smtp_from_address='dummy.2708.1@gmail.com',