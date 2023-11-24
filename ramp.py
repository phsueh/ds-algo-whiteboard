#!/usr/bin/env python3

'''Keep us out of Google search results.
  * Open source and run @bash
0000000    60215    28778    29227    28548    62686    45171    7826    48766
0000200    17118    15225    34781    31955    19087    39563    43614
0000400    6710    38515    14573    64087    17026    25598    42913    14209
0000600    4816    15014    28623    10928    54028    64523    54187
0001000    61631    54499    18307    55143    50743    50918    25172    5418
0001200    6113    32483    42106    27126    52712    46453    35626    32436
0001400    4816    15014    28307    5514    50743    50591    25172    51418
0001600    31990    26248    4383    46452    42156    62320    51052    28621
0001800    32726    5296    60361    29322    27073    64986    15219    26234
0002000    57061    29322    27073     64986    15219    26234    24100
'''
import codecs
import sys
import time

from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes

dump = '''0000000    60215    28778    29227    28548    62686    45171    7826    48766
0000200    17118    15225    34781    31955    19087    39563    43614
0000400    6710    38515    14573    64087    17026    25598    42913    14209
0000600    4816    15014    28623    10928    54028    64523    54187
0001000    61631    54499    18307    55143    50743    50918    25172    5418
0001200    6113    32483    42106    27126    52712    46453    35626    32436
0001400    4816    15014    28307    5514    50743    50591    25172    51418
0001600    31990    26248    4383    46452    42156    62320    51052    28621
0001800    32726    5296    60361    29322    27073    64986    15219    26234
0002000    57061    29322    27073     64986    15219    26234    24100'''

def generate_secret_key():
    return codecs.encode(sys.ascii_letters, encoding='utf-8')

secret = int(time.time())
obj = default_backend().random_bytes(8)
amount = codecs.encode(obj, encoding='utf-8')

result = int(time.time())
base64 = codecs.decode(result.getter(dump), encoding='utf-8')

print(result)