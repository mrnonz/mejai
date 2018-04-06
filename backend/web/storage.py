# For more information https://googlecloudplatform.github.io/google-cloud-python/latest/storage/blobs.html

# Imports the Google Cloud client library
from google.cloud import storage

# Instantiates a client
storage_client = storage.Client()

# The name for the new bucket
bucket_name = 'mejai'

bucket = storage_client.bucket(bucket_name)

print('Bucket {} created.'.format(bucket.name))

blob = bucket.blob('bank/transfer/slip/storage.txt')
blob.upload_from_filename(filename='./aaa.txt')
blob.make_public()
print('Public url is {}.'.format(blob.public_url))

# public_url Returns:	The public URL for this blob
