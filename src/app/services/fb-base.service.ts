import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Data } from '../shared/models/data.model';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService<T extends { id?: string }> {


  constructor(private afs: AngularFirestore) { }

  async addPayment(collectionName: string, data: Data, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(Object.assign({}, data));
    return uid;
  }
  getByName(collectionName: string, name: string): Observable<any> {
    return this.afs.collection(collectionName).doc(name).valueChanges();
  }
  get(collectionName: string): Observable<T[]> {
    return this.afs.collection(collectionName, ref => {
      const query: CollectionReference | Query = ref;
      return query;
    }).valueChanges() as Observable<T[]>;
  }
  delete(collectionName: string, id: string): void {
    // tslint:disable-next-line: no-unused-expression
    this.afs.collection(collectionName).doc(id).delete();
  }
  update(data: Data): void {
    this.afs.collection('payment').doc(data.id).update(Object.assign({}, data));
    this.afs.collection('refund').doc(data.id).update(Object.assign({}, data));
  }
}
