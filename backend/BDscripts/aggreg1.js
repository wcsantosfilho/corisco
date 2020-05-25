db = db.getSiblingDB('corisco')
cursor = db.registroentrega.find();
while ( cursor.hasNext() ) {
	printjson( cursor.next() );
}
