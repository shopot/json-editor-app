import json
import random
from faker import Faker
import uuid
from datetime import datetime
import string

fake = Faker()

def generate_data(num_records):
    data = []

    for _ in range(num_records):
        record = {
            "_id": str(uuid.uuid4()),
            "index": random.randint(0, 9999),
            "guid": str(uuid.uuid4()),
            "isActive": fake.boolean(),
            "balance": fake.pyfloat(left_digits=4, right_digits=2, positive=True, min_value=1000, max_value=4000),
            "picture": 'http://placehold.it/32x32',
            "age": random.randint(20, 40),
            "eyeColor": random.choice(["blue", "brown", "green"]),
            "name": f"{fake.first_name()} {fake.last_name()}",
            "gender": fake.random_element(elements=["male", "female"]),
            "company": fake.company().upper(),
            "email": fake.email(),
            "phone": f"{fake.phone_number()}",
            "address": f"{random.randint(100, 999)} {fake.street_name()}, {fake.city()}, {fake.state()}, {random.randint(100, 10000)}",
            "about": fake.text(max_nb_chars=200),
            "registered": fake.date_this_decade().strftime("%Y-%m-%dT%H:%M:%S %z"),
            "latitude": f"{fake.latitude()}",
            "longitude": f"{fake.longitude()}",
        }
        data.append(record)

    return data

def save_to_json_file(filename, data):
    with open(filename, "w") as f:
        json.dump(data, f, indent=4)

if __name__ == "__main__":
    num_records = 10000
    data = generate_data(num_records)
    save_to_json_file("generated_data.json", data)
    print(f"{num_records} - Done!!!")
